import styled from "styled-components";

export const LocationInformationMain = styled.div`
  position: absolute;
  top: 95px;
  right: 100px;
  border: 1px lightgray solid;
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  color: #000000;
  z-index: 100;

  .TopDiv {
    display: flex;
    flex-direction: column;
    height: 50%;
    img {
      border-radius: 3px 3px 0 0;
    }
  }

  .BottomDiv {
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    .address,
    .phone {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 7px;
      img {
        margin: 0 20px 0 0;
      }
    }
    .website {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 0px;
      img {
        margin: 0 13px 0 0;
      }
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }
`;
