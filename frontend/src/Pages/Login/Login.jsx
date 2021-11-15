import React, { useState } from 'react'
import { LoginWrapper, LoginButton, LoginInput } from './LoginStyles'
import {useHistory} from 'react-router'
import axios from 'axios'

// test email: toweg84572@bomoads.com

export default function Login() {
    const [email, setemail] = useState('')
    const [code, setcode] = useState('')
    const [username, setusername] = useState('')
    const [location, setlocation] = useState('')
    const [password, setpassword] = useState('')
    const [password2, setpassword2] = useState('')
    const history = useHistory()
    const registerHandler = (nr=1) => {
        history.push(`/register${nr}`)
    }
    const registerHandler1 = async () => {
        await axios.post(
            `https://luna2.propulsion-learn.ch/backend/api/registration/`,
            {email: email}
            )
        history.push(`/register2`)
    }
    const registerHandler3 = async () => {
        await axios.post(
            `https://luna2.propulsion-learn.ch/backend/api/registration/validate/`,
            {
                email,
                code,
                username,
                password,
                password_repeat: password2,
                location,
            })
        // console.log(data, 'success')
        history.push(`/login`)
    }
    const loginHandler = async () => {
        const { data } = await axios.post(
            `https://luna2.propulsion-learn.ch/backend/api/auth/token/`,
            {
                email,
                password,
            })
        // console.log(data, 'success')
        localStorage.setItem('token', data.access)
        history.push(`/`)
        window.location.reload()
    }

    
    const pageType = function (state) {
        
        if (state === '/register1') return (
            <>
            <div className='titleWrapper'>
                    <h3>REGISTER</h3>
                    <div className='underline'></div>
            </div>
    
            <div className='inputWrapper'>
                <LoginInput type="text" placeholder='E-mail' value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
    
            <div className='buttonWrapper'>
                    <LoginButton onClick={registerHandler1}>Register</LoginButton>
            </div>
            </>
        )
        else if (state === '/register2') return (
            <>
            <div className='titleWrapper'>
                    <h3>REGISTER</h3>
                    <div className='underline'></div>
            </div>
    
            <div className='inputWrapper'>
                <p>Thanks for your registration. <br />
    Our hard working monkeys are preparing a digital message 
    called E-Mail that will be sent to you soon. Since monkeys 
    arent good in writing the message could end up in you junk 
    folder. Our apologies for any inconvienience. Thank you for registering </p>
            </div>
    
            <div className='buttonWrapper'>
                    <LoginButton onClick={() => registerHandler(3)} >Continue</LoginButton>
            </div>
            </>
        )
        else if (state === '/register3') return (
            <>
            <div className='titleWrapper'>
                    <h3>REGISTER</h3>
                    <div className='underline'></div>
            </div>
    
            <div className='inputWrapper' id='validate'>
                <LoginInput type="text" placeholder='E-mail address' value={email} onChange={(e) => setemail(e.target.value)} />
                <LoginInput type="text" placeholder='Validation code' value={code} onChange={(e) => setcode(e.target.value)} />
                <LoginInput type="text" placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} />
                <LoginInput type="text" placeholder='Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                <LoginInput type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                <LoginInput type="password" placeholder='Password repeat' value={password2} onChange={(e) => setpassword2(e.target.value)} />
            </div>
    
            <div className='buttonWrapper'>
                    <LoginButton onClick={registerHandler3}>Finish registration</LoginButton>
            </div>
            </>
        )
    
        else return (
            <>
            <div className='titleWrapper'>
                    <h3>LOGIN</h3>
                    <div className='underline'></div>
            </div>
    
            <div className='inputWrapper'>
                <LoginInput type="text" placeholder='E-mail' value={email} onChange={(e) => setemail(e.target.value)} />
                <LoginInput type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>
    
            <div className='buttonWrapper'>
                    <LoginButton onClick={loginHandler}>Login</LoginButton>
            </div>
            </>
            )
        }
    return (
        <LoginWrapper>

            {pageType(history.location.pathname)}

        </LoginWrapper>
    )
}
