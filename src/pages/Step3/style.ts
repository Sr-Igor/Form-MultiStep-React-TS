import styled from "styled-components";

export const Container = styled.div`
    margin-left: 35px;
    margin-top: 37px;
`
export const FormStep = styled.form`
    margin-top: 30px;

    label {
        display: flex;
        flex-direction: column;
    }

    input {
        background-color: transparent;
        border: 0;
        outline: none;
        color: white;
        height: 35px;
        font-size: 22px;
        padding: 5px;
        border: solid 2px #555;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    input:focus {
        border: solid 2px #49926b;
    }


    .buttonsArea { 
        margin-top: 40px;
    }

    .back{
        border: 0;
        background-color: transparent;
        color: white;
        font-size: 20px;
    }

    .next {
        background-color: #49926b;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 25px;
        padding: 10px;
        margin-left: 15px;

        &:hover {
            opacity: 0.8;
        }
    }
`