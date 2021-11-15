import styled from "styled-components";

export const TopDiv = styled.div`
  height: 204px;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .ReviewDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 60vw;
    textarea {
      height: 20vh;
      width: 40vw;
      border: 1px solid #e3e3e3;
      resize: none;
      outline: none;
      padding: 15px;
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: #4c4c4c;
      ::placeholder {
        position: absolute;
        left: 2.16%;
        right: 9.98%;
        top: 5%;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #bbb7b7;
      }
    }
    .TopDiv {
      display: flex;
      align-items: center;
      width: 40vw;
      padding: 10px;

      p {
        font-family: Helvetica;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #7e7e7e;
        margin: 10px;
      }
    }

    .BottomDiv {
      display: flex;
      justify-content: space-between;
      width: 40vw;
      margin-top: 10px;
      button {
        background-color: #e47d31;
        border: none;
        height: 58px;
        width: 200px;
        border-radius: 28px;
        color: white;
        font-size: large;
        background-color: #e47d31;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
          color: #4a4a4a;
        }
      }
      p {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        margin: 0;
        color: #b00000;
      }
    }
  }
`;
