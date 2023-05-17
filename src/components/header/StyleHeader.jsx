import styled from "styled-components";

export const StyleSection = styled.section`

position: relative;

.airplane{
    width: 1600px;
    border-radius: 20px;
    margin-left: 150px;
}
form{

display: flex;
flex-direction: column;
align-items: center;
font-family: 'Alata', sans-serif;
width: 800px;
height: 750px;
background-color: rgba(255, 255, 255, 0.8);
position: absolute;
top: 40px;
left: 40px;
border-radius: 15px;

h1{
    font-size: 50px;
}

p{
  font-size: 20px;
}

button{
  width: 250px;
  margin: 10px;
}

div{

    display: flex;

    .travelTypeOne{
        width: 140px;
        height: 40px;
        border-radius: 5px;
        background-color: purple;
        color: white;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .travelTypeTwo{
        width: 140px;
        height: 40px;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .destinyButton{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            margin: 0;
        }
    }

    button{
        width: 250px;
        height: 80px;
        display: flex;
        margin: 10px;
        padding: 15px;

        img{
            width: 40px;
            margin-right: 8px;
        }
        div{
            display: flex;
            flex-direction: column;
            h3{
                margin: 2px;
            }
        }
    }
    .passengers{
        display: flex;
        justify-content: center;

        h3{
          margin-top: 2px;
          margin-right: 5px;
        }
    }

    }

    .submitButton{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        background-color: purple;
        color: white;
        align-self: center;
        font-size: 20px;
        border-radius: 10px;

        h3{
            margin: 10px;
        }

        img{
            filter: invert(100%);
            width: 30px;
            margin-right: 10px;
        }
    }
}
`