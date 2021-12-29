import styled from "styled-components";

export const StyledButton = styled.button`
    cursor : pointer;
    padding : 0.em 1.5em;
    font-family : sans-serif;
    font-size : 1.25em;
    border : ${(props) => {
        return props.outline !== true? "white" : "lightblue"
    }} 1px solid;

    background-color : ${(props) => {
        return props.outline !== true? "lightblue" : "white"
    }};

    color : ${(props) => {
        return props.outline !== true? "white" : "lightblue"
    }};

    width : ${(props) => {
        return props.fullWidth !== null? "100%" : "auto"
    }};

    &:hover {
        border : ${(props)=>{
            return props.outline === false? "cornflowerblue" : "lightblue"
        }} 1px solid;
        background-color : ${(props)=>{
            return props.outline === false? "cornflowerblue" : "lightblue"
        }};
        color : white;
    };


`
