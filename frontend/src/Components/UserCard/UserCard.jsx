import React, { useState } from 'react'
import { UserCardMain } from './UserCardStyles'
import defaultPFP from '../../assets/images/default-user-icon.png'

export default function UserCard(props) {
    const [imgLoaded, setimgLoaded] = useState(false)
    return (
        <UserCardMain>
            <div className='coloredTop'></div>

            <div className='profileHeader'>

                <img src={defaultPFP} alt="profile icon" height='65' width='65' style={ imgLoaded ? {display: "none"} : {}} />
                <img src={props.user.avatar} alt="profile icon" height='65' width='65' onLoad={() => setimgLoaded(true)} style={ imgLoaded ? {} : {display: "none"}} />

                <h4>{props.user.first_name ? props.user.first_name (props.user.last_name && props.user.last_name[0] + '.') : props.user.username}</h4>
                <span>{props.user.reviews.length} Reviews in total</span>
            </div>

            <div className='bioWrapper'>
                <p className='bioText'>
                    {props.user.about_me ? (props.user.about_me.length > 130 ? props.user.about_me.substring(0, 125) + '...  ' : props.user.about_me + '  ') : "I'm sure this person is very interesting, but they don't have anything in their bio... "} 
                    <a href="">read more</a>
                </p>
            </div>
        </UserCardMain>
    )
}
