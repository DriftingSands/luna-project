import styled from 'styled-components'


export const UserCardMain = styled.div`
    border: 1px lightgray solid;
    margin: 15px;
    width: 270px;
    height: 190px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0 0 5px lightgray;
    
    .coloredTop {
        border-radius: 3px 3px 0 0;
        height: 8px;
        width: 100%;
        background: #E47D31;
    }

    .profileHeader {
        height: 65px;
        border-bottom: solid gray 1px;
        display: grid;
        grid-template-columns: 65px auto;
        grid-template-rows: repeat(2, 50%);
        align-items: center;

        img {
            grid-row: 1 / 3;
            object-fit: cover;
            width:65px;
            height:65px;
        }
        h4 {
            font-size: 22px;
            color: #E47D31;
        }
        span {
            font-size: 16px;
            color: #4C4C4C;
            font-weight: bold;
        }
    }

    .bioWrapper {
        display: flex;
        flex-direction: column;
        margin: 10px 10px;
        justify-content: flex-start;
    }

    .bioText {
        margin: 5px 0;
        color: #4C4C4C;
        font-weight: 600;
        font-size: 14px;
        max-height: 85px;
        overflow: hidden;
        
        a {
            font-size: 14px;
            color: #E47D31;
            font-weight: bold;
            text-decoration: none;

            &:hover {
                text-decoration: underline; 
            }
        }
    }


`