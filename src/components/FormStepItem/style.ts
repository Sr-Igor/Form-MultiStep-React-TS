import styled from "styled-components";

export const Container = styled.div<{color : string, colorCircle: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .left {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size:30px;
    }
    
    .subTitle {
        font-size: 12px;
    }

    .right {
        display: flex;
        align-items: center;
        margin-right: -7px;
        margin-top: 20px;
    }

    .bg-right{ 
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.color};
        border-radius: 80px;;
        padding: 3px;
        margin-right: 35px;
        cursor: pointer;

        &:hover {
            opacity: 0.7
        }
    }

    img {
        max-width: 30px;
    }

    .point {
        width: 12px;
        height: 12px;
        background-color: ${props => props.colorCircle};
        border-radius: 10px;
        border: 1px solid #444;
    }
`