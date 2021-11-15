import React, { useEffect, useState } from 'react'
import { LoginPopup, SearchDiv, SearchMainDiv } from './SearchStyle'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard'
import ReviewCard from '../../Components/ReviewCard/ReviewCard'
import UserCard from '../../Components/UserCard/UserCard'
import { useHistory } from 'react-router'
import axios from 'axios'



export default function Search() {
    const history = useHistory()
    const [fetchData, setfetchData] = useState([])
    const [searchQuery, setsearchQuery] = useState('')
    const [category, setcategory] = useState('')
    const [token, settoken] = useState(localStorage.getItem('token'))
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [likePopup, setlikePopup] = useState(false)
    const [user, setUser] = useState({})

    const getFetchData = async (link) => {
        const {data} = await axios.get(link)
        console.log('full data', data)
        setfetchData(data)
    }

    const checkToken = async () => {
        const config = {headers: {Authorization: `Bearer ${token}`}}
        try {
            const response = await axios.get('https://luna2.propulsion-learn.ch/backend/api/users/me/', config)
            if (response.status === 200) {
                setisLoggedIn(true)
                await setUser(response.data)
                console.log('setting user ', user)
            }
            else setisLoggedIn(false)
            
        } catch (error) {
            return
        }
    }

    useEffect(() => {
        async function effectAsync() {
            if (!isLoggedIn) await checkToken()
            
            if (history.location.pathname === '/search/users') await getFetchData('https://luna2.propulsion-learn.ch/backend/api/users/list/')
            else if (history.location.pathname === '/search/reviews') await getFetchData('https://luna2.propulsion-learn.ch/backend/api/reviews/')
            else await getFetchData('https://luna2.propulsion-learn.ch/backend/api/restaurants/')
        }
        effectAsync();
        
    },[])
    const cardType = (element) => {
        if (history.location.pathname === '/search/users') return <UserCard key={element.id} user={element}/>
        else if (history.location.pathname === '/search/reviews') return (<ReviewCard 
        key={element.id} 
        restsurantId={element.id}
        review={element} 
        user={user} isLoggedIn={isLoggedIn} 
        likePopup={likePopup} setlikePopup={setlikePopup} />
        )
        else return <RestaurantCard key={element.id} restaurant={element} />
    }
    const restaurantsHandler = () => {
        history.push('/search/restaurants')
    }
    const reviewsHandler = () => {
        history.push('/search/reviews')
    }
    const usersHandler = () => {
        history.push('/search/users')
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(category, searchQuery)
        if (!searchQuery) return
        let type = ''
        if (history.location.pathname === '/search/users') {type = 'users'}
        else if (history.location.pathname === '/search/reviews') {type = 'reviews'}
        else {type = 'restaurants'}
        console.log('search variables', type, searchQuery)

        const { data } = await axios.post(
            `https://luna2.propulsion-learn.ch/backend/api/search/`,
            {
                type,
                search_string: searchQuery
            },{})
        console.log('search data', data)
        setfetchData(data)
    }

    return (
        <div>
            {likePopup && 
                <LoginPopup>
                    <div className='innerPopup'>
                        <h6 className='loginPrompt'>Please login to like and comment on reviews!</h6>
                    </div>
                    <div className='background' onClick={()=> setlikePopup(false)}></div>
                </LoginPopup> 
            }
            <SearchDiv onSubmit={submitHandler} >
                    <input type="search" placeholder='Search...' className='searchPageBar' value={searchQuery} onChange={(e) => setsearchQuery(e.target.value)} />
                    <select name="catagory" id="catagory" className='catagoryOptions' value={category} onChange={(e) => setcategory(e.target.value)}>
                        <option value="0" hidden >Select a category...</option>
                        <option value="1">Swiss</option>,
                        <option value="2">Italian</option>,
                        <option value="3">French</option>,
                        <option value="4">German</option>,
                        <option value="5">Indian</option>,
                        <option value="6">American</option>,
                        <option value="7">Turkish</option>,
                        <option value="8">Greek</option>,
                        <option value="9">Caribbean</option>,
                        <option value="10">Belgian</option>,
                        <option value="11">Austrian</option>,
                        <option value="12">British</option>
                    </select>
            </SearchDiv>

            <SearchMainDiv pageState={history.location.pathname}>
                <div className='navigation'>
                    <h3 id='restaurants' onClick={restaurantsHandler} >Restaurants</h3>
                    <h3 id='reviews' onClick={reviewsHandler} >Reviews</h3>
                    <h3 id='users' onClick={usersHandler} >Users</h3>
                </div>

                <div className='searchCards'>
                    {fetchData.map((value, index)=>{
                            return cardType(value)
                        })}
                </div>
            </SearchMainDiv>
        </div>
  );
}
