import {TopDiv, BottomDiv} from './HomeStyle'
import React, { useEffect, useState } from 'react'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard'
import { useHistory } from 'react-router'
import axios from 'axios'


export default function Home() {
    const history = useHistory()
    const [restaurants, setrestaurants] = useState([])
    
    const searchHandler = (e) => {
        e.preventDefault()
        history.push('/search/restaurants')
    }

    // for now this is fetching all of the restaurants
    const getRestaurants = async () => {
        const {data} = await axios.get('https://luna2.propulsion-learn.ch/backend/api/home/')
        console.log('~ data', data)
        setrestaurants(data)
    }
    useEffect(() => {
        getRestaurants()
    },[])


    return (
        <div className='homeDiv' >
            <TopDiv>
                <input type="search" className='searchInput' onClick={searchHandler} placeholder='Search...' />
                <button className='searchButton' onClick={searchHandler} >Search</button>
            </TopDiv>
            
            <BottomDiv>
                <h3>BEST RATED RESTAURANTS</h3>
                <div className='underline'></div>

                <div className='cardContainer'>
                    {restaurants.map((value, index)=>{
                        if (index > 3) return null
                        return <RestaurantCard key={value.id} restaurant={value} />
                    })}
                </div>
            </BottomDiv>

        </div>
    )
}
