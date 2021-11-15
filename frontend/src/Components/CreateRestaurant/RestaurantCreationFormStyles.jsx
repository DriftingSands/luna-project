import styled from "styled-components";


export const RestaurantCreationFormMainCont = styled.div`
    border: 1px lightgray solid;
    /* margin: 15px; */
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    /* margin-left: 10%;
    margin-right: 10%; */
    /* border-radius: 3px; */
    /* box-shadow: 0 0 5px lightgray; */
    font-weight: bold;


    .formTitle {
        display:flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 80%;
        /* position: absolute; */
        top: 3%;
        font-weight: bold;
        color: #4C4C4C;
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 16px;
    }

    .titleUnderline {
            border-bottom: solid orange ;
            width: 15%;
        }

    .form {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: center; */
        width: 80%;
        border: none;
            
            .inputBox, .selectBox {
                font-size: 16px;
                width: 200px;
                min-width: 200px;
                border: none;
                box-shadow: 5px 5px 15px 5px rgba(219,219,219,0.6);
            }
    

        .basic {
            display:flex;
            flex-direction: column;
            /* align-items: center; */
            width: 95%;
            margin-bottom: 2%;
            

            .basicBlock1 {
                display: flex;
                align-items: flex-start;
                font-weight: bold;
            }

            .basicBlock2 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color: grey;
                

                .basic-col1 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }

                .basic-col2 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    /* margin-left: 10%;
                    margin-right: 10%; */
                }

                .basic-col3 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }
            }

        }

        .address {
            display:flex;
            flex-direction: column;
            /* align-items: center; */
            width: 95%;
            margin-bottom: 2%;

            .addressBlock1 {
                display: flex;
                align-items: flex-start;
                font-weight: bold;
            }

            .addressBlock2 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color: grey;

                .address-col1 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }

                .address-col2 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    /* margin-left: 10%;
                    margin-right: 10%; */

                }

                .address-col3 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }
            }
        }

        .contact {
            display:flex;
            flex-direction: column;
            /* align-items: center; */
            width: 95%;
            margin-bottom: 2%;

            .contactBlock1 {
                display: flex;
                align-items: flex-start;
                font-weight: bold;
            }

            .contactBlock2 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color: grey;

                .contact-col1 {
                    display: flex;
                    flex-direction: column;
                    /* width: 30%; */
                }

                .contact-col2 {
                    display: flex;
                    flex-direction: column;
                    /* width: 30%; */
                    /* margin-left: 10%;
                    margin-right: 10%; */
                }

                .contact-col3 {
                    display: flex;
                    flex-direction: column;
                    /* width: 30%; */
                }
            }
        }

        .details {
            display:flex;
            flex-direction: column;
            /* align-items: center; */
            width: 95%;
            margin-bottom: 6%;

            .detailsBlock1 {
                display: flex;
                align-items: flex-start;
                font-weight: bold;
            }

            .detailsBlock2 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                color: grey;

                .details-col1 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }

                .details-col2 {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    /* margin-left: 10%;
                    margin-right: 10%; */
                }

                .uploadImgLabel {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                }

                .uploadImg {
                    background-color: orange;
                }
            }
        }


        #createButtonContainer{
            display: flex;
            flex-direction: row;
            justify-content: center;
            #createBtn {
                background-color: orange;
                width: 150px;
                height: 30px;
                border-radius: 3px;
                border: none;
            }
        }      
    }
`;
