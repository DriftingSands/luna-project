import styled from "styled-components";
import star from "../../assets/svgs/star.svg";

export const StarRatingDiv = styled.div`
  .starWrapper {
    filter: drop-shadow(0px 0px 1px gray);
    -webkit-filter: drop-shadow(0px 0px 1px gray);
    justify-content: center;
    text-align: center;
  }

  .star,
  .activeStar {
    cursor: pointer;
    height: 44px;
    width: 44px;
    float: left;
    background-image: linear-gradient(#ebebeb 50%, #ebebeb 50%);
    mask-image: url(${star});
    mask-size: 44px 44px;
  }

  .activeStar {
    background-image: linear-gradient(to right, #f8e71c 50%, #f8e71c 50%);
  }
  input[type="radio"] {
    display: none;
  }
`;
