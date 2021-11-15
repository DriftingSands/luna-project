import styled from "styled-components";
import star from "../../assets/svgs/star.svg";

export const RestaurantHeaderDiv = styled.div`
  max-height: 469px;
  height: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  box-shadow: inset 0 204px 0 0 #0000007f;
  width: 100%;
  z-index: 50;
  color: #ffffff;
  font-family: Helvetica;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    margin: 25px 0 0 0;
  }
  h5 {
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    margin: 20px 0 0 0;
  }

  .RestaurantHeaderDivContainer {
    margin-left: 9vw;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;

    .starWrapper {
      filter: drop-shadow(0px 0px 1px gray);
      -webkit-filter: drop-shadow(0px 0px 1px gray);
      justify-content: center;
      text-align: center;
    }

    .stars {
      height: 25px;
      float: left;
      width: 125px;
      background-image: linear-gradient(to right, #f8e71c 50%, #ebebeb 50%);
      mask-image: url(${star});
      mask-size: 25px 25px;
    }
    .reviewCount {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      margin-left: 30px;
      text-align: center;
    }
  }
`;
