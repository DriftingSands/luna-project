import styled from "styled-components";

export const LoginPopup = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 9000;

  .loginPrompt {
    color: crimson;
    font-size: 30px;
  }

  .innerPopup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 50%;
    border-radius: 15px;
    box-shadow: 0 0 5px black;
    background-color: white;
    z-index: 9010;
  }

  .background {
    position: fixed;
    width: 100vw;
    background-color: #0000006e;
    z-index: 9000;
  }
`;

export const SearchDiv = styled.form`
  margin: 0;
  box-sizing: border-box;
  border: 2px crimson solid;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px lightgray solid;

  .searchPageBar {
    border: 1px transparent;
    border-right: 1px solid #d8d8d8;
    height: 100%;
    flex-grow: 1;
    outline: none;
    font-size: 20px;
    ::placeholder {
      padding-left: 10px;
    }
  }
  .catagoryOptions {
    border: 1px transparent;
    outline: none;
    height: 100%;
    padding: 0 20px;
    font-size: 20px;
    color: gray;
  }

  .categoryOptions {
    border: 1px transparent;
    outline: none;
    height: 100%;
    padding: 0 20px;
    font-size: 20px;
    color: gray;
    background-color: #ffffff;
  }
`;

export const SearchMainDiv = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .navigation {
    display: flex;
    font-size: 22px;

    h3 {
      padding: 20px;
      margin: 0;
      color: #4c4c4c;
      font-size: 28px;
      border-width: 3px;
      border-style: solid;
      border-image: linear-gradient(to top, #d8d8d8 0.5%, rgba(0, 0, 0, 0) 0.5%)
        1;

      ${(props) => {
        if (props.pageState === "/search/users")
          return `
            &#users{
                border-image: linear-gradient(to top, #E47D31 1px, rgba(0, 0, 0, 0) 0.5%) 1;
            }
        `;
        else if (props.pageState === "/search/reviews")
          return `
            &#reviews{
                border-image: linear-gradient(to top, #E47D31 1px, rgba(0, 0, 0, 0) 0.5%) 1;
            }
        `;
        else
          return `
                &#restaurants{
                    border-image: linear-gradient(to top, #E47D31 1px, rgba(0, 0, 0, 0) 0.5%) 1;
                }
            `;
      }}

      &:hover {
        cursor: pointer;
        border-image: linear-gradient(to top, #e4ae87 1px, rgba(0, 0, 0, 0) 1px)
          1;
      }
    }
  }

  .searchCards {
    display: grid;
    grid-template-columns: repeat(4, auto);
    flex-direction: row;
    padding-bottom: 100px;
  }
`;
