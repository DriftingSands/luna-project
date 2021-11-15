import React, {useState, useEffect} from 'react'
import {RestaurantContainer} from "./RestaurantStyle"
import {useHistory} from 'react-router'


const Restaurants = () => {
    const history = useHistory();
    const createRestaurantHandler = () => {
        history.push(`/newrestaurant`)
    }

    const [restaurants, setRestaurants] = useState(null);

        async function getRest() {
          // const token = localStorage.getItem('token')
          // const config = {headers: {Authorization: `Bearer ${token}`}}
          const config = {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`,}}
          const restaurants = await fetch("https://luna2.propulsion-learn.ch/backend/api/restaurants/", config);
          const restData = await restaurants.json();
          setRestaurants(restData);
        }
        useEffect(() => {
            getRest()
        }, []); 
      console.log(restaurants);
    return(
        <RestaurantContainer>
            <p className="Title">Restaurants</p>
            {restaurants && (
                <ul> 
                    {restaurants.map(restaurant => {
                        return <div key={restaurant.created} >
                            <div className="Header">
                                <p>Rest name</p>
                                {/* <p className="Name">Name={restaurants.filter(restaurant => restaurant.id === review.restaurant_id).name}</p> */}
                                <p className="Date">{restaurant.updated}</p>
                            </div>
                            <div className="Rating">
                                rating {restaurant.rating}
                            </div>
                            <div className="Text">
                                <p>{restaurant.text_content}</p>
                            </div>
                        </div>
                    })}
                </ul>)}
            <div className="Button">
                <button onClick={createRestaurantHandler}>Create Restaurant</button>
            </div>
    </RestaurantContainer>
    )
}

export default Restaurants