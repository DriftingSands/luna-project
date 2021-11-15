import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { TopDiv, BottomDiv, FilterContainer } from "./RestaurantPageStyle";
import RestaurantHeader from "../../Components/RestaurantHeader/RestaurantHeader";
import RestaurantReviewWide from "../../Components/RestaurantReviewWide/RestaurantReviewWide";
import RestaurantInformation from "../../Components/RestaurantInformation/RestaurantInformation";
import LocationInformation from "../../Components/LocationInformation/LocationInformation";

export default function RestaurantPage() {
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

  const reviews = [fetchData.restaurant_reviews];
  return (
    <div className="RestaurantPageDiv">
      <TopDiv>
        <RestaurantHeader />
        <LocationInformation />
      </TopDiv>

      <BottomDiv>
        <div className="left">
          <FilterContainer>
            <input
              type="search"
              placeholder="Filter list..."
              className="FilterBar"
            />
            <button href="#" className="FilterButton">
              FILTER
            </button>
          </FilterContainer>
          <div className="cardContainer">
            {reviews.map((value, index) => {
              return RestaurantReviewWide(value);
            })}
          </div>
        </div>
        <RestaurantInformation />
      </BottomDiv>
    </div>
  );
}
