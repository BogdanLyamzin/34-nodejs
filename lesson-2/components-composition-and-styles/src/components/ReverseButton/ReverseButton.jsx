import styled from "@emotion/styled";

const ReverseButton = styled.button`
    border: 1px solid red;
    border-radius: 5px;
    outline: none;
    padding: 10px 15px;
    color:  ${(props)=> props.reverse ? "#fff" : "red"};
    cursor: pointer;
    background-color: ${(props)=> props.reverse ? "red" : "#fff"};
`

export default ReverseButton