import styled from 'styled-components'

export const RestaurantContainer = styled.div`
    padding: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: start;

    .CommentWrapper {
        margin-left: -40px;
        border-bottom: 1px solid #EBEBEB;
    }
    
    .Title {
        font-family: Helvetica;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0px;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .Header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .Name {
        font-family: Helvetica;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
    }

    .Date {
        font-family: Helvetica;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: right;
    }

    .Text {
        /* align-items: start; */

      p {font-family: Helvetica;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0px;
        }
    }
    
    .Button {
        display: flex;
        align-items: center;
    }

    button {
        bottom: 0.02px;
        height: 57px;
        width: 200px;
        border-radius: 28px;
        border: none;
        background: #E47D31;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
    }
`
