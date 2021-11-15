import styled from 'styled-components'
import star from '../../assets/svgs/star.svg'


export const RestaurantCardMain = styled.div`
    border: 1px lightgray solid;
    margin: 15px;
    width: 270px;
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    box-shadow: 0 0 5px lightgray;
    
    .coloredTop {
        border-radius: 3px 3px 0 0;
        height: 8px;
        width: 100%;
        background: #E47D31;
    }

    img {
        margin: 0;
        object-fit: cover;
        width:270px;
        height:270px;
    }

    .restaurantName{
        font-size: 20px;
        margin: 10px 10px;
    }

    .address{
        font-size: 16px;
        margin: 10px 10px;
    }


    .rating {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
        /* box-shadow:1px 1px 4px rgba(0,0,0,0.75); */
        
        .starWrapper {
            -webkit-filter: drop-shadow(0px 0px 1px gray);
            filter: drop-shadow(0px 0px 1px gray);

        }

        .stars{
            height: 25px;
            width: 125px;
            background-image: linear-gradient(to right, #F8E71C 50%, #EBEBEB 50%);
            mask-image: url(${star});
            mask-size: 25px 25px;
        }
    }
`