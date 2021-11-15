import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { RestaurantReviewWideMain } from "./RestaurantReviewWideStyles";
import defaultImage from "../../assets/images/default-user-icon.png";
import thumbsUp from "../../assets/svgs/thumbs-up.svg";

const rating = 50;
const starStyle = {
  backgroundImage: `linear-gradient(to right, #F8E71C ${rating}%, #EBEBEB ${rating}%)`,
};
const reviews = 18;
const createdAt = new Date().toLocaleString([], {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export default function RestaurantReviewWide() {
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
  return (
    <RestaurantReviewWideMain>
      <div className="TopDiv">
        <img src={defaultImage} alt="User Profile" width="68" />
        <div className="LeftContainer">
          <h5 className="reviewerName">{fetchData.name}</h5>
          <span className="reviewCount">{reviews} Reviews in Total</span>
        </div>
        <div className="rating">
          <div className="starWrapper">
            <div className="stars" style={starStyle}></div>
          </div>
        </div>
        <span className="CreationDate">{createdAt}</span>
      </div>
      <div className="BottomDiv">
        <p className="ReviewText">
          This location at the Bahnhofstrasse is quite friendly and easily
          located across the street from the train station. The people there
          seem to be quite good and helpful in their service.
        </p>
        <div className="LikeCommentContainer">
          <div className="ButtonContainer">
            <div className="Like">
              <img src={thumbsUp} alt="Like Icon"></img>Like 63
            </div>
            <div className="Comment">Comment 23</div>
          </div>
          <p className="ShowComments">View all comments</p>
        </div>
      </div>
    </RestaurantReviewWideMain>
  );
}
