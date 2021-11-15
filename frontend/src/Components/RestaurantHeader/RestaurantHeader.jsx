import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { RestaurantHeaderDiv } from "./RestaurantHeaderStyles";

export default function RestaurantHeader() {
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

  let category = [
    "Swiss",
    "Italian",
    "French",
    "German",
    "Indian",
    "American",
    "Turkish",
    "Greek",
    "Caribbean",
    "Belgian",
    "Austrian",
    "British",
  ];
  const rating = fetchData.rating_average * 20;
  const starStyle = {
    backgroundImage: `linear-gradient(to right, #F8E71C ${rating}%, #EBEBEB ${rating}%)`,
  };
  const backgroundIMG = {
    backgroundImage: `url(${fetchData.image})`,
  };
  return (
    <RestaurantHeaderDiv style={backgroundIMG}>
      <div className="RestaurantHeaderDivContainer">
        <h3>{fetchData.name}</h3>
        <h5>{category[fetchData.category - 1]}</h5>
        <div className="rating">
          <div
            className="starWrapper"
            title={"Average: " + fetchData.rating_average}
          >
            <div className="stars" style={starStyle}></div>
            <span className="reviewCount">
              {fetchData.review_count} reviews
            </span>
          </div>
        </div>
      </div>
    </RestaurantHeaderDiv>
  );
}
