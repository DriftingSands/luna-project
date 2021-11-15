import styled from 'styled-components'

export const ReviewContainer = styled.div`
    padding: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    
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
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
    }

    li {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin-left: -40px;
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
        padding-top: 10px;
        }
    }
`

