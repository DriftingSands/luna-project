import styled from "styled-components";

export const LoginWrapper = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f2f2f2;

    .titleWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3, .underline, .cardContainer {
            margin: 5px;
        }
    
        h3 {
            color: #4c4c4c;
            font-size: 28px;
        }
    
        .underline {
            background-color: #e47d31;
            height: 3px;
            width: 100px;
            border-radius: 2px;
        }
    }
    
    .inputWrapper {
        display: flex;
        max-width: 760px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
        &#validate {
            flex-direction: row;
            flex-wrap: wrap;
            input {
                flex-basis: 44%;
            }
            
        }

        p {
            max-width: 500px;
            text-align: center;
            font-family: Helvetica;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: center;
        }
    }
`

export const LoginInput = styled.input`
    height: 32px;
    padding: 30px 20px;
    width: 340px;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 3px;
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    transition: .5s;
    
    &:focus {
        transition: .5s;
        background-color: #e9e9e9;

    }
`

export const LoginButton = styled.button`
    height: 56px;
    width: 200px;
    border: none;
    background: #E47D31;
    border-radius: 28px;
    color: white;
    font-family: Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
        color: #4a4a4a;
}

`