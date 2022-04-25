import styled from "styled-components";


export const Container = styled.div<{color : string}>`
label {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #555;
    min-height: 50px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: ${props => props.color};
    cursor: pointer;

    &:hover {
        background-color: #49926b;
    }
    
    input {
        display: none;
    }
};
`