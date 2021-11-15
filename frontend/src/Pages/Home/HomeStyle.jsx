import styled from "styled-components";
import BackgroundIMG from "../../assets/images/Homepage-background.png";

export const TopDiv = styled.div`
  height: 30vh;
  display: flex;
  background-image: url(${BackgroundIMG});
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;

  & * {
    margin: 20px;
  }

  .searchInput {
    background-color: white;
    height: 55px;
    width: 500px;
    border-radius: 3px;
    font-size: large;
    border: 1px gray solid;
    outline: none;
    padding: 0 15px;

    &::placeholder {
      color: black;
    }
  }

  .searchButton {
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
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;

  h3,
  .underline,
  .cardContainer {
    margin: 5px;
  }

  h3 {
    color: #4c4c4c;
    font-size: 28px;
  }

  .underline {
    background-color: #e47d31;
    height: 3px;
    width: 265px;
    border-radius: 2px;
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
  }
`;
