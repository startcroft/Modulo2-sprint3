import styled from "styled-components";
// import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg";
export const StyleSection = styled.header`
  display: flex;
  width: 100%;
  height: 100vh;

  .airplane {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin: 40px 80px;

    img {
      width: 80%;
      height: 90vh;
      border-radius: 20px;
    }
  }

  form {
    display: flex;
    width: 35%;
    flex-direction: column;
    align-items: center;
    font-family: "Alata", sans-serif;
    background-color: rgb(237, 237, 237);
    position: absolute;
    top: 11%;
    left: 6%;
    border-radius: 15px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 20px 30px 0px 30px;

    h1 {
      margin: 2% 5% 0% 2%;
    }
    h2 {
      margin: 0;
    }
    p {
      padding: 0;
      display: flex;
      justify-content: flex-start;
    }

    div {
      display: flex;

      button {
        background-color: #fff;
        display: flex;
        margin: 10px;
        padding: 15px;
        border: 0;

        img {
          width: 30px;
          margin-right: 8px;
        }
        div {
          display: flex;
          flex-direction: column;
          h3 {
            margin: 2px;
          }
        }
      }
      
    }

    /* .submitButton {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #9e247b;
      color: white;
      align-self: center;
      font-size: 20px;
      border-radius: 100px;
      border: 0;
      margin: 2% 0% 4% 0%;
      cursor: pointer;

      h3 {
        margin: 10px;
      }

      img {
        filter: invert(100%);
        width: 30px;
        margin-right: 10px;
      }
    } */
    .destinos {
      display: flex;
      width: 100%;
      justify-content: space-between;
      

      .destinyButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: auto;
        border: 1px solid rgb(193, 193, 193);
        border-radius: 5px;
        cursor: pointer;
        h3 {
          margin: 0;
        }
        span {
          margin: 5px 0px 0px 0px;
          font-size: 14px;
        }
        
      }
      
    }

    .tipoViaje {
      display: flex;
      left: 10px;
      width: 60%;
      position: relative;
      left: -18%;
      border: 1px solid rgb(193, 193, 193);
      border-radius: 5px;
      justify-content: flex-start;
      background-color: #fff;
      .travelType {
        width: 140px;
        height: 20px;
        border-radius: 5px;
        background-color: #fff;
        color: #070707;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        /* :focus{
          background-color: #9e247b;
          color: #fff;
        } */
      }
      .selected{
        background-color: #9e247b;
        color: #fff;
      }
      
    }
    .calendarios {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .calendar {
        display: flex;
        width: 50%;
        justify-content: flex-start;
        border: 1px solid rgb(193, 193, 193);
        border-radius: 5px;
        div {
          display: flex;
          justify-content: flex-start;
          margin-left: 2%;
          span {
            margin: 0;
            padding: 0;
          }
          h4 {
            margin: 0;
            padding: 0;
            font-size: 15px;
          }
        }
      }
    }
    .pasajeros{
      display: flex;
      width: 100%;
      justify-content: space-between;
      .passengers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        border: 1px solid rgb(193, 193, 193);
        border-radius: 5px;
        div{
          display: flex;
          justify-content: flex-start;
          h4 {
          margin:2px; 
          padding:0;
          font-size: 15px;
        }
        }
        
      }
    }

    .modal-container{

      /* background-color: red; 
      color: red; */
      div{
        .passengerType{
          
          display: flex;
          flex-direction: column;
          h2{
              font-size: 20px;
              margin-bottom: 1px;
          }
      }
      }
    }
  
  }

  .modal-container{

    background-color: red; 
    color: red;
    div{
      .passengerType{
        
        display: flex;
        flex-direction: column;
        h2{
            font-size: 20px;
            margin-bottom: 1px;
        }
    }
    }
  }
`;
