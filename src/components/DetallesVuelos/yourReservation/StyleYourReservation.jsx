import styled from "styled-components";

export const ReservationInfo = styled.article`
width: 25%;
margin-left: 100px;
margin-top: 60px;
font-family: "Alata", sans-serif;

.reservationTitle{
    background-color: #bab9b1;
    height: 60px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    h3{
        font-size: 25px;
        margin-left: 30px;
    }
}

article{

    background-color: white;

    padding: 30px;
    .passengersContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        height: 50px;
        margin-bottom: 30px;

        div{
            padding-top: 10px;
            
        }
    }

    h4{
        font-size: 22px;
        margin-bottom: 0;
        margin-top: 20px;
    }

    .flightDestination{
        display: flex;

        div{

            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                font-size: 35px;
            }

            p{
                font-size: 18px;
                margin: 10px;
            }
        }

        p{
            margin-top: 48px;
        }
    }

    h3{
        font-size: 20px;
    }
}

.flightCost{
    margin-top: 30px;
    .titleCost{
        background-color: #bab9b1;
        height: 60px;
        border-radius: 8px;
        display: flex;
        align-items: center;

        h3{
           font-size: 25px;
          margin-left: 30px;
         }
    }

    article{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;

        p{
            font-size: 20px;
        }
    }
}

`