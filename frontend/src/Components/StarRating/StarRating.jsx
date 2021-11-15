import React, { useState } from "react";
import { StarRatingDiv } from "./StarRatingStyles";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <StarRatingDiv>
      {[...Array(5)].map((Star, i) => {
        const ratingValue = i + 1;
        return (
          <label className="starWrapper">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <div
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                ratingValue <= (hover || rating) ? "activeStar" : "star"
              }
            ></div>
          </label>
        );
      })}
    </StarRatingDiv>
  );
}
