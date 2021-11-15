import styled from "styled-components";

export const TopDiv = styled.div`
  height: 469px;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
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
    flex-direction: column;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: max(38vw, 650px);

  .FilterBar {
    width: max(38vw, 600px);
    left: 0px;
    top: 0px;
    margin-right: 20px;
    background: #ffffff;
    border: 0.5px solid #ebebeb;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 3px;

    &:focus {
      outline: 1px solid #e47d31;
    }
  }
  .FilterButton {
    background-color: #e47d31;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 12px;
    width: max(7vw, 100px);
    cursor: pointer;
    margin-right: 1px;
    border-radius: 28px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      color: #4a4a4a;
    }
  }
`;
