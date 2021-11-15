import React from "react";
import { TopDiv, BottomDiv } from "./WriteNewReviewStyles";
import RestaurantHeader from "../../Components/RestaurantHeader/RestaurantHeader";
import StarRating from "../../Components/StarRating/StarRating";

export default function WriteNewReview() {
  return (
    <div className="WriteNewReviewDiv">
      <TopDiv>
        <RestaurantHeader />
      </TopDiv>

      <BottomDiv>
        <div className="ReviewDiv">
          <div className="TopDiv">
            <StarRating />
            <p>Select your Rating</p>
          </div>
          <textarea
            id="reviewText"
            name="reviewText"
            placeholder="Your review helps others learn about great local businesses.&#10;Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
          />
          <div className="BottomDiv">
            <p>This field is required</p>
            <button type="submit" form="reviewText" value="Submit">
              SUBMIT
            </button>
          </div>
        </div>
      </BottomDiv>
    </div>
  );
}
