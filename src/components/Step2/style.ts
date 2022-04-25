import styled from "styled-components";


export const Container = styled.div`
    margin-left: 35px;
    margin-top: 37px;
`

export const FormStep = styled.form`

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #555;
        min-height: 50px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: #49926b;
        }
    };

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
