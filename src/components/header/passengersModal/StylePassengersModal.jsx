import styled from "styled-components";


export const StyleDiv = styled.div`

.modal{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
  justify-content: center;
  align-items: center;

.modal-container{
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 320px;
    height: 350px;
    overflow-y: auto;
    background-color: #fff;
    top: 250px;
    left: 100px;
    border-radius: 15px;

    div{
        display: flex;
        justify-content: space-evenly;
    }

    .passengerType{
        display: flex;
        flex-direction: column;
        h2{
            font-size: 20px;
            margin-bottom: 1px;
        }
    }

    .countButton{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 30px;
        }
    }
 }
}

 .modal.is-open {
  display: flex;
}
`