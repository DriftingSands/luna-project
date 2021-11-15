import React, { useEffect, useState } from "react";
import {
  MainHeader,
  LeftHeader,
  RightHeader,
  Logo,
  HeaderLink,
  ButtonLeft,
  ButtonRight,
  ButtonLogout,
} from "./HeaderStyles";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import LunaLogo from "../../assets/images/logo.png";
import { useHistory } from "react-router";

function Header() {
    const location = useLocation();  
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const checkToken = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setisLoggedIn(false)
            return
        }
        const config = {headers: {Authorization: `Bearer ${token}`}}
        const response = await axios.get('https://luna2.propulsion-learn.ch/backend/api/users/me/', config)
        if (response.status === 200) setisLoggedIn(true)
        else setisLoggedIn(false)
    }

    useEffect(() => {
        checkToken()
    },[])

    const history = useHistory()
    const signUpHandler = (e) => {
        e.preventDefault()
        history.push('/register1')
    }
    const loginHandler = (e) => {
        e.preventDefault()
        history.push('/login')
    }
    const homeHandler = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const searchHandler = (e) => {
        e.preventDefault()
        history.push('/search/restaurants')
    }
    const logoutHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        history.push('/')
        window.location.reload()
    }
    const profileHandler = (e) => {
        e.preventDefault()
        history.push('/profile')
    }

  return (
    <MainHeader>
      <LeftHeader>
        <Logo onClick={homeHandler}>
          <img src={LunaLogo} width="144px" height="45" alt="Luna Logo" />
        </Logo>
      </LeftHeader>
      <RightHeader>
        
        <HeaderLink
          onClick={homeHandler}
          className={splitLocation[1] === "" ? "active" : ""}
        >
          Home
        </HeaderLink>
        <HeaderLink
          onClick={searchHandler}
          className={splitLocation[1] === "search" ? "active" : ""}
        >
          Search
        </HeaderLink>
        <HeaderLink
          onClick={profileHandler}
          className={splitLocation[1] === "profile" ? "active" : ""}
        >
          Profile
        </HeaderLink>
        <div className='buttonWrapper'>
            {isLoggedIn ?
            <ButtonLogout onClick={logoutHandler} >LOGOUT</ButtonLogout> :
            <>
            <ButtonLeft onClick={signUpHandler} >SIGNUP</ButtonLeft>
            <ButtonRight onClick={loginHandler} >LOGIN</ButtonRight>
            </>
            }
        </div>
      </RightHeader>
    </MainHeader>
  );
}

export default Header;
