import styled from "styled-components";

const Input = styled.input`
    order: 1px solid #FFF;
    background-color: #00FFFF;
    border: 1px solid #000000;
    padding: 10px 140px;
    border-radius: 5px;
    width: 200px;
    color: #000000;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #000000;
        font-size: 16px;
    }
`
export default Input