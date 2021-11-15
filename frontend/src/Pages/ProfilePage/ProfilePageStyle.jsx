import styled from "styled-components";

export const ProfilePageMain = styled.div`
    font-family: helvetica;
    box-sizing: border-box;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #F2F2F2;

    .BackGround {
        img {
            height: 20vh;
            background-repeat: no-repeat;
            width: 100vw;
            height: 155px;
        }
    }
`   
export const MainWrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: end;
`

export const LeftSideWrapper = styled.div`
    width: 12%;
    height: 50%;
    position: absolute;
    top: 106px;
    left: 10vw;

    .Avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            width: 100%;
            background: white;
        }

        span {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px;
            letter-spacing: 0px;
            text-align: center;
            margin: 20px 0px;
        }
    }

    .LeftNavbar {
        border-right: 1px solid #EBEBEB80;
        background-color: #FFFFFF;

        div {
            border-bottom: 1px solid grey;
            display: flex;
            align-items: center;

            span {
                font-size: 18px;
                font-style: normal;
                font-weight: 300;
                line-height: 21px;
                letter-spacing: 0px;
                text-align: left;

            }

            :hover, 
            :active {
                background-color: rgba(0, 0, 0, 0.0837013);
                border-left: 5px solid #E47D31;
                cursor: pointer;
            }

            img {
                width: 25%;
                margin: 10px;
            }
        }
    }
`

export const PersonalInfo = styled.div`
    width: 12%;
    position: absolute;
    top: 106px; 
    left: 23vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;

    .Name {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: center;
        padding-bottom: 10px;
    } 

    span {
        font-family: Helvetica;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: center;
    }
`

export const MiddleWindow = styled.div`
    border: 1px solid #EBEBEB;
    width: 65%;
    background: white;

`

export const Reviews = styled.div`

`

export const RightSideWrapper = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    h1, h2 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        margin-left: 10px; 
        
    }

    p {
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        margin-left: 10px; 
    }
`
