import styled from "styled-components";

export const CommentForm = styled.form`
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 2000;



    textarea {
        color: black;
        resize: none;
        font-size: 20px;
        padding: 10px;
        margin: 20px 0;
        border: #e47d31 2px solid;
        border-radius: 4px;
        outline: none;
        transition: .5s;
        background-color: white;
        
        &:focus {
            background-color: lightgray;
            transition: .5s;
        }
    }

    .innerPopup {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        width: 30%;
        border-radius: 15px;
        box-shadow: 0 0 5px black ;
        background-color: white;
        z-index: 1100;
        flex-direction: column;

    }

    .background {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: #0000006e;
        z-index: 1000;
    }
`

export const ReviewCardMain = styled.div`
  border: 1px lightgray solid;
  margin: 15px;
  width: 270px;
  height: 410px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 5px lightgray;
  background-color: #ffffff;

  .coloredTop {
    border-radius: 3px 3px 0 0;
    height: 8px;
    width: 100%;
    background: #e47d31;
  }

  .reviewHeader {
    height: 65px;
    border-bottom: solid gray 1px;
    display: grid;
    grid-template-columns: 65px auto;
    grid-template-rows: repeat(2, 50%);
    align-items: center;

    img {
      grid-row: 1 / 3;
      object-fit: cover;
      width:65px;
      height:65px;
    }
    h4 {
      font-size: 22px;
      color: #e47d31;
    }
    span {
      font-size: 16px;
      color: #4c4c4c;
      font-weight: bold;
    }
  }

  .reviewWrapper {
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
    justify-content: flex-start;
    height: 100px;
  }

  .restaurantName {
    font-size: 20px;
    color: #e47d31;
    margin: 0;
  }
  .reviewText {
    margin: 5px 0;
    color: #4c4c4c;
    font-weight: 600;
    font-size: 14px;
    max-height: 85px;
    overflow: hidden;

    a {
      font-size: 14px;
      color: #e47d31;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .buttonWrapper {
    margin: 0px 10px 10px 10px;
    display: flex;
    height: 35px;
    justify-content: center;
    border-radius: 17px;

    .likeButton {
      border-radius: 17px 0 0 17px;
        ${props => {
            if (props.like === 1) return `color: red`
            else return `color: white`}
            }
    }
    .commentButton {
      border-radius: 0 17px 17px 0;
    }

    button {
      display: flex;
      width: 45%;
      justify-content: space-around;
      align-items: center;
      color: white;
      margin: 0 1px;
      border: none;
      background-color: #bdbdbd;
      transition: 0.5s;

      &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
      }
    }

    img {
      margin-top: -3px;
      filter: invert();
    }
  }
  .commentSection {
    display: flex;
    height: 140px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px 10px;

    * {
      margin: 5px 0;
    }
    h5 {
      font-family: Helvetica;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 23px;
      letter-spacing: 0px;
      text-align: left;
    }
    h6 {
      margin-top: 10px;
      font-family: Helvetica;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
      color: #e47d31;
    }
    p {
      font-family: Helvetica;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
`;
