import styled from "styled-components";

export const StyledSeleccionAsiento = styled.div`
    display: flex;
    width: 80%;
    margin-left: 100px;
    margin-top: 40px;

    button{
        width: 100%;
        background-color: transparent;
        padding: 3.5%;
        border: 1px solid #9e247b;
        border-radius: 5rem;
        color: #9e247b;
        font-size: 1.2rem;
        font-weight: 500;
        :hover{
            cursor: pointer;
            background-color: #9e247b;
            color: #fff;
            transition: background-color .3s ease-out;
        }
    }
`;