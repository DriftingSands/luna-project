import React, {useState, useEffect} from "react";
import star from "../../assets/svgs/star.svg";
import comment from "../../assets/svgs/comment.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import edit from "../../assets/svgs/edit.svg";
import bckgrnd from "../../assets/images/Homepage-background.png";
import userIcon from "../../assets/images/default-user-icon.png";
import {LeftSideWrapper,
     ProfilePageMain,
     MiddleWindow,
     RightSideWrapper,
     MainWrapper,
     PersonalInfo,
    } from "./ProfilePageStyle";
import Comments from "../../Components/ProfilePageComponents/Comments"
import Restaurants from "../../Components/ProfilePageComponents/Restaurants"
import EditProfile from "../../Components/ProfilePageComponents/EditProfile"
import Reviews from "../../Components/ProfilePageComponents/Reviews"



const ProfilePage = () => {
    
    const [user, setUser] = useState(null);
    const [showReviews, toggleShowReviews] = useState(true)
    const [showComments, toggleShowComments] = useState(false)
    const [showRestaurants, toggleShowRestaurants] = useState(false)
    const [showEditProfile, toggleShowEditProfile] = useState(false)
    
    async function getData() {
        const config = {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`,}}
        const user = await fetch("https://luna2.propulsion-learn.ch/backend/api/users/me/", config);
        const data = await user.json();
        setUser(data);
    }
    useEffect(() => {
        getData();
    }, []); 
    
    console.log(user);    

    const reviewsHandler = () => {
        // props.onClick();
        toggleShowReviews(true);
        toggleShowComments(false);
        toggleShowRestaurants(false);
        toggleShowEditProfile(false);
        console.log('in da reviewshandler');
    }

    const commentsHandler = () => {
        // props.onClick();
        toggleShowComments(true);
        toggleShowRestaurants(false);
        toggleShowReviews(false);
        toggleShowEditProfile(false);
    }

    const restaurantsHandler = () => {
        // props.onClick();
        toggleShowRestaurants(true);
        toggleShowComments(false);
        toggleShowReviews(false);
        toggleShowEditProfile(false);
    }

    const editProfileHandler = () => {
        // props.onClick();
        toggleShowEditProfile(true);
        toggleShowComments(false);
        toggleShowRestaurants(false);
        toggleShowReviews(false);
    }

    return (
        <ProfilePageMain>
            <div className="BackGround">
                <img src={bckgrnd} alt="BackGround" />
            </div>
            <MainWrapper>
                <LeftSideWrapper>
                    <div className="Avatar">
                        <img src={userIcon} alt="Avatar" />
                        {/* <span>{user.username}'s profile</span> */}
                    </div>
                    <div className="LeftNavbar">
                        <div className="Reviews" onClick={reviewsHandler}>
                            <img src={star} alt="Star" />
                            <span>
                                Reviews
                            </span>
                        </div>
                        <div className="Comment" onClick={commentsHandler}>
                            <img src={comment} alt="Comment" />
                            <span>
                                Comments
                            </span>
                        </div>
                        <div className="Restaurant" onClick={restaurantsHandler}>
                            <img src={restaurant} alt="Restaurant" />
                            <span>
                                Restaurants
                            </span>
                        </div>
                        <div className="Edit" onClick={editProfileHandler}>
                            <img src={edit} alt="Edit" />
                            <span>
                                Edit profile
                            </span>
                        </div>
                    </div>    
                </LeftSideWrapper>
                <PersonalInfo>
                    {/* <span className="Name">{user.username}</span>
                    <span>{user.location}</span>
                    <span>{user.reviews.length} reviews</span>
                    <span>{user.comments} comments</span> */}
                </PersonalInfo>
            <MiddleWindow>
                {showReviews ? <Reviews /> : null}
                {showComments ? <Comments /> : null}
                {showRestaurants ? <Restaurants /> : null}
                {showEditProfile ? <EditProfile /> : null}
            </MiddleWindow>
            <RightSideWrapper>
                <h1>About user</h1>
                {/* <h1>{user.username}</h1> */}
                <div>
                    <h2>Location</h2>
                    {/* <p>{user.location}</p> */}
                </div>
                <div>
                    <h2>Luna member since</h2>
                    {/* <p>{user.created}</p> */}
                </div>
                <div>
                    <h2>Things I like</h2>
                    {/* <p>{user.interests}</p> */}
                </div>
                <div>
                    <h2>Description</h2>
                    {/* <p>{user.about_me}</p> */}
                </div>
            </RightSideWrapper>
        </MainWrapper>
        </ProfilePageMain>
        
    )
}

export default ProfilePage