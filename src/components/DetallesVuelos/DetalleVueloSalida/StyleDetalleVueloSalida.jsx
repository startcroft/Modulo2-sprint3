import styled from "styled-components";

export const ExitFlight = styled.section`
font-family: "Alata", sans-serif;
margin: 50px;
width: 65%;

.exitFlightHeader{

    display: flex;
    justify-content: space-between;
    
    article{

        h2{
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        h3{
            font-size: 28px;
            font-weight: 300;
            margin-bottom: 0;
        }
        p{
            font-size: 18px;
        }
    }

    button{
        height: 40px;
        font-size: 18px;
        color: purple;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid purple;
        border-radius: 20px;
        margin: 30px;
    }


}
.timeCard{
        display: flex;
        align-items: center;
        background-color: white;
        margin-bottom: 20px;
        padding: 20px 45px;
        border-radius: 15px;
        box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.75);
        h3{
            font-size: 28px;
            width: 130px;
        }

   div{
         display: flex;
         justify-content: center;
         flex-direction: column;
         align-items: center;
            img{
                width: 230px;
                object-fit: cover;
                object-position: center;
                margin: 0;
            }

            p{
                margin: 0;
            }
      }

      .briefcaseButton{

        padding: 10px;
        width: 170px;
        height: 110px;
        margin-left: 20px;
        h3{
            font-size: 18px;
            margin-top: 5px;
            margin-bottom: 3px;
            margin-left: 10px;
        }
        p{
            font-size: 16px;
            margin: 0px;
        }
        img{
            width: 30px;
            margin-bottom: 9px;
        }
      }

      .luggageChoosed{
        background-color: purple!important;
        color: white;
      }
    }
`