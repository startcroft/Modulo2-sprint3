import React, { createContext, useState } from "react";

const FlightContextUno = createContext();

const FlightProvider = ({ children }) => {
    const [passengersAmount, setPassengersAmount] = useState(0);
    const [adultAmount, setAdultAmount] = useState(0);
    const [childAmount, setChildAmount] = useState(0);
    const [babyAmount, setBabyAmount] = useState(0);

    const [simpleTravel, setSimpleTravel] = useState(false);

    const [exitDate, setExitDate] = useState();
    const [returnDate, setReturnDate] = useState();

    const [selectedCity, setSelectedCity] = useState({});
    const [selectedDestiny, setSelectedDestiny] = useState({});

    const [storageCity, setStorageCity] = useState({});
    const [storageDestiny, setStorageDestiny] = useState({});

    const [aboutFlight, setAboutFlight] = useState({});

    const handleStorageCity = (value) => {
        setStorageCity(value);
        
    } 
     const handleStorageDestiny = (value) => {
        setStorageDestiny(value);
        
    }

    const handleAboutFlight = (value) => {
        setAboutFlight(value);
        
    }

    const handleSimpleTravel = (value) => {
        console.log(simpleTravel);
        setSimpleTravel(value);
        
    }

    const handleSelectedCity = (value) => {
        setSelectedCity(value);
    }

    const handleSelectedDestiny = (value) => {
        setSelectedDestiny(value);
    }

    const handleExitDate = (value) => {
        setExitDate(value);
    }

    const handleReturnDate = (value) => {
        setReturnDate(value)
    }


    const incrementPassengers = () => {
        setPassengersAmount(
            prevAmount => prevAmount + 1
        )
    }

    const decrementPassengers = () => {
        if (passengersAmount === 0) {
            alert("No se pueden ingresar valores negativos");
        } else {
            setPassengersAmount(
                prevAmount => prevAmount - 1
            )
        }

    }

    const incrementAdultAmount = () => {
        setAdultAmount(
            prevAmount => prevAmount + 1

        )
        incrementPassengers()
    }

    const decrementAdultAmount = () => {

        if (adultAmount === 0) {
            alert("No se pueden ingresar valores negativos");
        } else {
            setAdultAmount(
                prevAmount => prevAmount - 1
            )
            decrementPassengers()
        }

    }

    const incrementBabyAmount = () => {
        setBabyAmount(
            prevAmount => prevAmount + 1

        )
        incrementPassengers()
    }

    const decrementBabyAmount = () => {

        if (babyAmount === 0) {
            alert("No se pueden ingresar valores negativos");
        } else {
            setBabyAmount(
                prevAmount => prevAmount - 1

            )
            decrementPassengers()
        }

    }

    const incrementChildAmount = () => {
        setChildAmount(
            prevAmount => prevAmount + 1

        )
        incrementPassengers()
    }

    const decrementChildAmount = () => {

        if (childAmount === 0) {
            alert("No se pueden ingresar valores negativos");
        } else {
            setChildAmount(
                prevAmount => prevAmount - 1
            )
            decrementPassengers()
        }



    }
    const data = {
        passengersAmount,
        adultAmount,
        childAmount,
        babyAmount,
        exitDate,
        returnDate,
        selectedCity,
        selectedDestiny,
        simpleTravel,
        aboutFlight,
        storageCity,
        storageDestiny,
        incrementPassengers,
        decrementPassengers,
        incrementAdultAmount,
        decrementAdultAmount,
        incrementBabyAmount,
        decrementBabyAmount,
        incrementChildAmount,
        decrementChildAmount,
        handleExitDate,
        handleReturnDate,
        handleSelectedCity,
        handleSelectedDestiny,
        handleSimpleTravel,
        handleAboutFlight,
        handleStorageCity,
        handleStorageDestiny
    };



    return (
        <FlightContextUno.Provider value={data}>
            {children}
        </FlightContextUno.Provider>
    );
};

export default FlightProvider;
export { FlightContextUno };
