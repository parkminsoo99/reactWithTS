import styled from '@emotion/styled';
import {Component} from 'react';

interface Props {
    readonly data: number;
}
const Container = styled.span`
    margin: 0px 16px;
    font-size:1.2rem;
`

// export const Label  = ({data} : Props) => {
//     return <Container>{data}</Container>
// }
 
export class Label extends Component<Props>{
    render(){
        const {data} = this.props;
        return <Container>{data}</Container>
    }
}