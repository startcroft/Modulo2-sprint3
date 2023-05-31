import React, { useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Button,  Form, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Styles.css'
import { FlightContextUno } from '../context/FlightContextUno';


const FormularioCompra = () => {
    const {
        aboutFlight,
        storageCity,
        storageDestiny } = useContext(FlightContextUno);
    const [numInputs, setNumInputs] = useState(0);
    // const [formData, setFormData] = useState({});
    const [open, setOpen] = React.useState(false)
    const [onSubmit, setOnSubmit] = useState(false)
    const [infoVuelo, setInfoVuelo] = useState([])
    const { name, tel, documento, nTarjetaCredito, email } = infoVuelo;
    const formik = useFormik({
        initialValues: {
            name: '',
            tel: '',
            documento: '',
            nTarjetaCredito: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(true),
            tel: Yup.number().required(true),
            documento: Yup.number().required(true),
            nTarjetaCredito: Yup.number().required(true).min(16),
            email: Yup.string().email().required(true),
        }),
        onSubmit: (formValue) => {
            console.log('formulario enviado');
            console.log(formValue);
            setOnSubmit(true);
            setInfoVuelo(formValue);
            console.log(infoVuelo);
        }
    })

    useEffect(() => {
        const storedNumInputs = sessionStorage.getItem("FlightContextUno") ? JSON.parse(sessionStorage.getItem("FlightContextUno")) : {};
        const { adultAmount, babyAmount, childAmount, exitDate, returnDate, simpleTravel } = storedNumInputs;
        if (storedNumInputs) {
            const numInputs = adultAmount + babyAmount + childAmount;
            setNumInputs(Number(numInputs));
        }
        console.log(aboutFlight, storageCity,storageDestiny);
    }, []);


    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < numInputs; i++) {
            inputs.push(
                <Form.Input
                    key='nombre'
                    name='name'
                    // value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder={`Nombre Pasajero ${i + 1}`}
                    error={formik.errors.name}
                    className='inputForm' 
                />

            );
            inputs.push(
                <Form.Input
                    key="telefono"
                    name='tel'
                    // value={formik.values.tel}
                    onChange={formik.handleChange}
                    placeholder="Ingrese el número de teléfono"
                    error={formik.errors.tel}
                    className='inputForm' 
                />
            );

            inputs.push(
                <Form.Input
                    key="documento"
                    name='documento'
                    // value={formik.values.documento}
                    onChange={formik.handleChange}
                    placeholder="Ingrese el número de documento"
                    error={formik.errors.documento}
                    className='inputForm' 
                />
            );
        }
        return inputs;
    };

    return (
        
        <div className='container' >
            <link
                async
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            />
            <Form className='Form' onSubmit={formik.handleSubmit}  >
                {/* <label>Pasajeros</label> */}

                {renderInputs()}

                {/* <label>Tarjeta de crédito: </label> */}
                <Form.Input className='inputForm' type="text" placeholder="Ingrese el número de tarjeta de crédito" value={formik.values.nTarjetaCredito} error={formik.errors.nTarjetaCredito} name='nTarjetaCredito' onChange={formik.handleChange} />
                <Form.Input className='inputForm'  type="text" placeholder='Ingrese su Email' value={formik.values.email} error={formik.errors.email} name='email' onChange={formik.handleChange} />
                {/* <Form.Button type="submit">Enviar</Form.Button> */}

                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => onSubmit ? setOpen(true) : setOpen(false)}
                    trigger={<Button type='submit'>Enviar</Button>}
                    style={{width:'20%'}}
                >
                    <Modal.Header>Gracias por tu compra!</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            {
                                <div className='info'>
                                    <h3 className='informacion'>Nombre: <span>{name}</span> </h3>
                                    <h4 className='informacion'>Email: <span>{email}</span></h4>
                                    <h4 className='informacion'>Documento: <span>{`${documento ? documento.slice(0, 6) : ''}****`}</span> </h4>
                                    <h5 className='informacion'>Tel: <span>{tel}</span> </h5>
                                    <h4 className='informacion'>Cuenta Bancaria: <span>{`***********${nTarjetaCredito ? nTarjetaCredito.slice(14) : ''} `}</span> </h4>
                                </div>

                            }
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <Button onClick={() => setOpen(false)}>OK</Button>
                        </Link>

                    </Modal.Actions>
                </Modal>
            </Form>
        </div>

       

    );
};

export default FormularioCompra;
