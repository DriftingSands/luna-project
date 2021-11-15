import styled from "styled-components";
import star from "../../assets/svgs/star.svg";

export const RestaurantReviewWideMain = styled.div`
  border: 1px lightgray solid;
  margin: 15px;
  width: 650px;
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;

  .TopDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ebebeb;

    .LeftContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .CreationDate {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 30%;
      margin: 12px;
      font-family: Helvetica;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
    }
  }
  img {
    margin: 0;
  }

  .reviewerName {
    color: #e47d31;
    font-size: 20px;
    margin: 0;
  }

  .reviewCount {
    color: #4c4c4c;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }

  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;

    .starWrapper {
      filter: drop-shadow(0px 0px 1px gray);
      -webkit-filter: drop-shadow(0px 0px 1px gray);
    }

    .stars {
      height: 25px;
      width: 125px;
      background-image: linear-gradient(to right, #f8e71c 50%, #ebebeb 50%);
      mask-image: url(${star});
      mask-size: 25px 25px;
    }
  }

  .BottomDiv {
    display: flex;
    flex-direction: column;
    height: 100%;

    .ReviewText {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      margin: 10px 0 0 10px;
    }

    .LikeCommentContainer {
      display: flex;
      flex-direction: row;
      .ButtonContainer {
        display: flex;
        justify-content: center;
        height: 100%;
        height: 33px;
        margin: 10px;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          float: left;
          text-align: center;
          background-color: #bdbdbd99;
          border: none;
          color: #fff;
          font-family: Helvetica;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          padding: 0px;
          height: 33px;
          width: max(8vw, 125px);
          cursor: pointer;
          margin-right: 1px;
          border-radius: 28px 0 0 28px;
          transition: all 0.2s ease;

          &:hover {
            transform: scale(1.1);
            color: #4a4a4a;
            img {
              filter: none;
            }
          }
        }
        .Like {
          img {
            filter: invert(98%) sepia(9%) saturate(407%) hue-rotate(216deg)
              brightness(116%) contrast(100%);
            height: 21px;
          }
        }
        .Comment {
          border-radius: 0 28px 28px 0;
        }
      }
    }
    .ShowComments {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      color: #e47d31;
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      margin: 0 10px;
      align-items: center;
    }
  }
`;
