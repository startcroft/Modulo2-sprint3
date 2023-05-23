import styled from "styled-components";
export const StyledButton = styled.div`
  display: flex;
  width: 100%;
  .submitButton {
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
  }
`;
