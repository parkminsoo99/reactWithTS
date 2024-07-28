// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import styled from "@emotion/styled";
// import { keyframes } from "@emotion/react";

// const Container = styled.div`
//   text-align: center;
// `;

// const Header = styled.header`
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px+2vmin);
//   color: white;
// `;
// const spinAnimation = keyframes`
//     from {
//         transform: rotate(0deg);

//     }to{
//         transform: rotate(360deg);
//     }
// `;
// const AppLogo = styled.img`
//   height: 40vmin;
//   pointer-events: none;

//   @media (prefers-reduced-motion: no-preference) {
//     animation: ${spinAnimation} infinite 20s linear;
//   }
// `;

// function App() {
//   return (
//     <Container>
//       <Header>
//         <AppLogo src={logo} alt="logo" />
//         <p>
//           Edit
//           <code>src/App.tsx</code>
//           and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </Header>
//     </Container>
//   );
// }

// export default App;


import styled from "@emotion/styled";
import { useState } from 'react';
import { Label } from "components/Label";
import { Button } from 'components/Button';
import { Component } from "react";
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    margin-bottom: 32px;
`

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/* function App() {
    const [counter,setCounter] = useState(0)
    const sub = () => {
        setCounter(counter - 1);
    }
    const plus = () => {
        setCounter(counter + 1);
    }
    return (
        <Container>
            <Title>Counter App</Title>
            <Contents>
                <Button label="-" onClick={sub} />
                <Label data={counter}/>
                <Button label="+" onClick={plus}/>
            </Contents>
        </Container>
    )
}

export default App; */

//App 컴포넌트는 Props를 사용하지 않고, state만 사용하기에 Record<string,never> 선언

type Props = Record<string,never>;
interface State {
    readonly counter: number;
}

export default class App extends Component<Props,State>{
    //클래스 컴포넌트는 클래스 이기에 생성자 사용 가능 => State를 초기화하는 데 활용
    constructor(props:Props){
        super(props);
        this.state = {
            counter:0,
        }
    }
    private sub = () => {
        const {counter} = this.state;
        this.setState({
            counter: counter - 1,
        }); 
    };
    private plus = () => {
        const {counter} = this.state;
        this.setState({
            counter:counter +1,
        });
    };

    render() {
        const {counter} = this.state;
        return(
            <Container>
                <Title>Counter App</Title>
                <Contents>
                    <Button label="-" onClick={this.sub} />
                    <Label data={counter}/>
                    <Button label="+" onClick={this.plus}/>
                </Contents>
            </Container>
        );
        
    }

}