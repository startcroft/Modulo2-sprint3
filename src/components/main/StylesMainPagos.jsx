import { styled } from "styled-components"

export const StylesMainPagos = styled.main `
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    flex-direction: column;
    margin: 40px 80px;
    font-family: 'Roboto', sans-serif;
    h1{
        font-size: 3.2rem;
    }
    p{
        font-size: 1.4rem;
    }
    img{
        width: 3rem;
    }
`;
export const InfoPagos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 36px;
`;
export const CompaniesTarjetas = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
    div{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: 3.45rem;
        figure{
            padding: 0;
            margin: 0;
            cursor: pointer;
        }
    }
`;
