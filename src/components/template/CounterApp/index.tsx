import {Title} from "components/atoms/Title";
import {Counter} from "components/organisms/Counter";
import styled from "@emotion/styled";
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const CounterApp = () => {
    return (
        <Container>
            <Title title = "Counter App" />
            <Counter />
        </Container>


    )
}