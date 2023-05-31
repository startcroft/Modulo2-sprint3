import styled from "styled-components";
import imgNotFonud from '../../00 RECURSOS PROYECTO SPRINT 2/images/avionNotFound.jpg'

export const StylesNotFonud = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
    background-image: url(${imgNotFonud});
    margin: 0;
    padding: 0;
    width: 100%;
    height: 97.5vh;
    background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 20%;
    border-radius: 40px;
  }
  div{
    margin-top: 8%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        padding: 15px;
        width: 100%;
        font-size: 2rem;
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
        border-radius: 20px;
        border: none;
        background-color: #9cb8ebb3;
        cursor: pointer;
        :hover{
            background-color: #58a9c7c2;
            transform: scale(1.2);
            transition: transform 0.1s ease-out;
        }
    }
  }
`;