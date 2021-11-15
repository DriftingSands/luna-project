import styled from "styled-components";

export const EditProfileFormMainCont = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    .formTitle {
        font-family: Helvetica;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom: 20px;
    }

    .basicBlock2 {
        div {
            font-family: Helvetica;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            color: #979797;
            margin-bottom: 30px;
        }

        input {
            height: 52px;
            width: 324px;
            left: 0px;
            top: 34px;
            border-radius: 3px;
            background: #FFFFFF;
            border: 1px solid #EBEBEB;
            font-size: 25px;
            color: #979797;
        }   

    }

    #input-block, #inputDesc-block {
        div {
            margin-top: 20px;
        }
    }

    #inputDesc-block {

        input {
            height: 87.82221984863281px;
            width: 582px;
            left: 0px;
            top: 57.42236328125px;
            border-radius: 3px;
        }
    }

    .createButtonContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        #bttnSave {
            background: #E47D31;
            height: 56px;
            width: 200px;
            left: 0px;
            top: 0px;
            border-radius: 28px;
            border: none;
            font-family: Helvetica;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #FFFFFF;
        }

        #bttnDelete {
            /* width: 134px;
            height: 23px; */
            font-family: Helvetica;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #BA0000;
            background: none;
            border: none;
        }
    }
`