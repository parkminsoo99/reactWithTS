import styled from "@emotion/styled";
import {Component} from "react";
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

//함수 컴포넌트
// export const Button = (props:Props) => {
//     return <Container onClick={props.onClick}>{props.label}</Container>
// };

//클래스 컴포넌트
export class Button extends Component<Props>{
    render() {
        const { label, onClick} = this.props;
        return <Container onClick={onClick}>{label}</Container>
    }
}