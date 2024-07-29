import styled from "@emotion/styled";

import {useState} from "react";
import {DataView} from "components/DataView";
import { ToDoInput } from "components/ToDoInput";
import { Button } from "components/Button";
import { ShowInputButton } from "components/ShowInputButton";
import { InputContainer } from "components/InputContainer";
import {ToDoListContextProvider} from "contexts/ToDoList";
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #b29999;
`

function App() {

    return(
        <Container> 
            <ToDoListContextProvider>
                <DataView />
                <InputContainer />
            </ToDoListContextProvider>
            
        </Container>
    )
}
export default App;