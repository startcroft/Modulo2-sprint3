import amex from "../00 RECURSOS PROYECTO SPRINT 2/images/amex_82052.png";
import paypal from "../00 RECURSOS PROYECTO SPRINT 2/images/paypal.png";
import invex from "../00 RECURSOS PROYECTO SPRINT 2/images/Logo_de_Invex.svg.png";
import mastercard from "../00 RECURSOS PROYECTO SPRINT 2/images/Mastercard-logo.svg.png";
import visa from "../00 RECURSOS PROYECTO SPRINT 2/images/Visa_logo.png";
import oxxo from "../00 RECURSOS PROYECTO SPRINT 2/images/oxxo.png";
import eleven from "../00 RECURSOS PROYECTO SPRINT 2/images/1200px-7-eleven_logo.svg.png";
import walmart from "../00 RECURSOS PROYECTO SPRINT 2/images/walmart-logo-477.png";
import farmaciahorro from "../00 RECURSOS PROYECTO SPRINT 2/images/farmacias-del-ahorro-logo-vector.png";
import { IoMdCar } from 'react-icons/io';
import { MdGroup } from 'react-icons/md';
import { MdHotel } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';


export const pagosTarjetas = [
    {
        id: 1,
        image: amex,
        title: "American express"
    },
    {
        id: 2,
        image: paypal,
        title: "PayPal"
    },
    {
        id: 3,
        image: invex,
        title: "Invex"
    },
    {
        id: 4,
        image: mastercard,
        title: "Mastercard"
    },
    {
        id: 5,
        image: visa,
        title: "Visa"
    }
];

export const pagosEfectivo = [
    {
        id: 1,
        image: oxxo,
        title: "Oxxo"
    },
    {
        id: 2,
        image: eleven,
        title: "Eleven"
    },
    {
        id: 8,
        image: walmart,
        title: "Walmart"
    },
    {
        id: 4,
        image: farmaciahorro,
        title: "Farmacia del ahorro"
    }
];

export const serviciosDisponibles = [
    {
        id: 1,
        image: IoMdCar,
        title: "Logo Car",
        servicio: "Transporte",
        info:"Renta un auto o reserva un shuttle"
    },
    {
        id: 2,
        image: IoMdCar,
        title: "YaVas",
        servicio: "Vuelos + Hoteles",
        info:"Encuentra las mejores ofertas para tu viaje"
    },
    {
        id: 3,
        image: MdGroup,
        title: "Logo group",
        servicio: "Grupos",
        info:"Obtén una cotización para grupos de mas de 9 personas"
    },
    {
        id: 4,
        image: MdHotel,
        title: "Logo Hotel",
        servicio: "Hotel",
        info:"Reserva cualquier habitación en cualquier parte del mundo"
    },
    {
        id: 5,
        image: FaWallet,
        title: "Logo Carga",
        servicio: "Carga",
        info:"Contamos con servicio de carga y mensajería"
    },
];





