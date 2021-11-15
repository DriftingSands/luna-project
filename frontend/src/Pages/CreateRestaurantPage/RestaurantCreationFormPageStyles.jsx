import styled from "styled-components";

export const RestaurantCreationFormMainCont = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-family: Helvetica;
  font-size: 20px;

  p {
    line-height: 23px;
    color: #4c4c4c;
  }

  select,
  input {
    border: none;
    background-color: #ffffff;
    width: 370px;
    min-width: 200px;
    height: 50px;
    outline: none;
  }

  select {
    color: #d8d8d8;
  }

  .notSelected {
    color: #4c4c4c;
  }

  option {
    color: #4c4c4c;
    border: none;
    outline: none;
  }
  .formTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 80%;
    top: 3%;
    font-weight: bold;
    color: #4c4c4c;
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 16px;
  }

  .titleUnderline {
    border-bottom: solid #e47d31;
    width: 15%;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80vw;

    .basic {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 2%;

      .basicBlock2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
        height: 100px;
        p {
          color: #979797;
        }
      }
    }

    .uploadContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
    }

    .uploadedName {
      position: relative;
      bottom: -10px;
    }
    #uploadImg {
      display: none;
    }

    #uploadImgLabel {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
      height: 40px;
      width: 200px;
      border-radius: 28px;
      color: #ffffff;
      font-size: large;
      background-color: #e47d31;
      border: none;
      margin-right: 170px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
        color: #4a4a4a;
      }
    }
    #createButtonContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 15vh;

      #createBtn {
        height: 58px;
        width: 200px;
        border-radius: 28px;
        color: #ffffff;
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
    }
  }
`;
