import React, {useState, useEffect} from 'react'
import {ReviewContainer} from "./ReviewsStyle"
import axios from 'axios';
import StarRating from "../../Components/StarRating/StarRating"



const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [restaurants, setRestaurants] = useState(null);

    
        
        
        // getRest();
    
        async function getData() {
            // const token = localStorage.getItem('token')
            // const config = {headers: {Authorization: `Bearer ${token}`}}
            const config = {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`,}}
            const fetchedReviews = await fetch("https://luna2.propulsion-learn.ch/backend/api/reviews/user/me/", config);
            const data = await fetchedReviews.json();
            setReviews(data);
        };

        

        async function getRest() {
          // const token = localStorage.getItem('token')
          // const config = {headers: {Authorization: `Bearer ${token}`}}
          const config = {headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MzI1NDc4LCJqdGkiOiJjYmZkYWFiNjFiNTY0OGMyYTc4MDYyYTU2NjEyMzNlNiIsInVzZXJfaWQiOjV9.797alo40Q6tj5AhaHltiz5BZXtKsjpMuDaXkgnjRgP8'}}
          const restaurants = await fetch("https://luna2.propulsion-learn.ch/backend/api/restaurants/", config);
          const restData = await restaurants.json();
          setRestaurants(restData);
        }
        useEffect(() => {
            getData();
            getRest()
        }, []); 
      console.log(reviews);
      return(
          <ReviewContainer>
            <p className="Title">Reviews</p>
            {reviews && 
            // restaurants &&
            (
                <ul> 
                {reviews.map(review => {
                    return <li key={review.created} >
                        <div className="Header">
                            <p className="Name">{review.restaurant.name}</p>
                            <p className="Date">{review.updated.slice(0, 10)}</p>
                        </div>
                        <div className="Rating">
                            <StarRating/>
                            {/* {review.rating} */}
                        </div>
                        <div className="Text">
                            <p>{review.text_content}</p>
                        </div>
                    </li>
                })}
            </ul>)}
        </ReviewContainer>
    )
}

export default Reviews
