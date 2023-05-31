import styled from "styled-components";

export const StylesAsientos = styled.main`
background-color: #f0f0f0;
padding: 40px 80px;
margin: 0;
display: flex;
flex-direction: column;
width: 60%;
font-family: 'Roboto', sans-serif;
align-self: center;
.clicked{
    background-color: #9e247b !important;
}

    .botonesGuia{
        background-color:#fff;
        padding: 15px 20px 15px 20px;
        border-radius: 5px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-size: 16px;
        font-weight: bold;
        
    }
    .botonAsiento{
        padding: 25px;
        margin: 8px;
        border-color:#ececec;
        background:#96969684;
        border-radius:5px;
        border: 1px solid #fff       ;
    }
    
`;