import styled from "@emotion/styled";

interface Props{
    readonly label:string;
    readonly onClick: () => void;
}
const Container = styled.div`
    border: 0;
    color: #fff;
    background-color: rgb(255, 87, 34);
    cursor:pointer;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover{
        background-color: #ff5722;
        opacity: 0.8;
    }
    &:active{
        box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);;
    }
`;

export const Button = (props:Props) => {
    return <Container onClick={props.onClick}>{props.label}</Container>
};