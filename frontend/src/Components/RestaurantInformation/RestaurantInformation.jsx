import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import {
  RestaurantInformationContainer,
  TopDiv,
  MiddleDiv,
  BottomDiv,
  ReviewButton,
  EditButton,
  Text,
  Icon,
} from "./RestaurantInformationStyles";
import clock from "../../assets/svgs/clock.svg";
import money from "../../assets/svgs/money.svg";

export default function RestaurantInformation() {
  const { id } = useParams();
  const history = useHistory();
  const [fetchData, setFetchData] = useState([]);
  const getFetchData = async (link) => {
    const { data } = await axios.get(link);
    console.log("full data", data);
    setFetchData(data);
  };
  useEffect(() => {
    if (history.location.pathname.startsWith(`/restaurants/${id}`))
      getFetchData(
        `https://luna2.propulsion-learn.ch/backend/api/restaurants/${id}/`
      );
  }, []);

  // Converts the Integer to the amount of $-Symbols
  const pricelevel = fetchData.price_level;
  let pricelevel$ = "";
  for (let i = 0; i < pricelevel; i++) {
    pricelevel$ += "$";
  }

  const createReviewHandler = (e) => {
    e.preventDefault();
    history.push("/restaurants/1/review");
  };

  return (
    <RestaurantInformationContainer>
      <TopDiv>
        <Icon src={clock} alt="Clock-Icon" />
        <Text>{fetchData.opening_hours}</Text>
      </TopDiv>
      <MiddleDiv>
        <Icon src={money} alt="Money-Icon" />
        <Text>Price level: {pricelevel$}</Text>
      </MiddleDiv>
      <BottomDiv>
        <ReviewButton onClick={createReviewHandler}>
          WRITE A REVIEW
        </ReviewButton>
        <EditButton>EDIT DATA</EditButton>
      </BottomDiv>
    </RestaurantInformationContainer>
  );
}
