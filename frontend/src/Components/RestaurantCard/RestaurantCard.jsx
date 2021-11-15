import React, { useState } from 'react'
import { RestaurantCardMain } from './RestaurantCardStyles'
import defaultImage from '../../assets/images/default-restaurant.png'
import { useHistory } from 'react-router'



export default function RestaurantCard(props) {
    const history = useHistory()
    const [imgLoaded, setimgLoaded] = useState(false)
    const rating = props.restaurant.rating_average * 20
    const starStyle = {
        backgroundImage: `linear-gradient(to right, #F8E71C ${rating}%, #EBEBEB ${rating}%)`
    }
    const onClickHandler = () => {
        history.push(`/restaurants/${props.restaurant.id}`)
    }
    
    return (
        <RestaurantCardMain onClick={onClickHandler}>
            {/* {props.restaurant && <> */}
            <div className='coloredTop'></div>
            <h5 className='restaurantName'>{props.restaurant.name}</h5>
            <span className='address'>{props.restaurant.street} {props.restaurant.city}</span>
            <div className='rating'>
                <div className='starWrapper'>
                    <div className='stars' style={starStyle}></div>
                </div>
                <span className='reviewCount'>{props.restaurant.review_count}</span>
            </div>

            {/* Replace this image IF there is an image of the restaurant */}
            <img src={defaultImage} alt="" width='270' style={ imgLoaded ? {display: "none"} : {}} />
            <img src={props.restaurant.image} alt="" width='270' onLoad={() => setimgLoaded(true)} style={ imgLoaded ? {} : {display: "none"}} />
            
        {/* </>} */}
        </RestaurantCardMain>
    )
}
