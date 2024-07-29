import styled from "@emotion/styled";

import {useState} from "react";
import {DataView} from "components/DataView";
import { ToDoInput } from "components/ToDoInput";
import { Button } from "components/Button";
import { ShowInputButton } from "components/ShowInputButton";
import { InputContainer } from "components/InputContainer";
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #b29999;
`

function App() {
    const [toDoList, setToDoList] = useState<Array<string>>([
        '1',
        '2',
        '3'
    ])

    const onAdd =(toDo:string) => {
        setToDoList([...toDoList, toDo]);
    }
    
    const onDelete = (todo:string) => {
        setToDoList(toDoList.filter((item) => item !== todo));
    }
   
    return(
        <Container>  
            <DataView toDoList={toDoList} onDelete={onDelete}/>
                <InputContainer onAdd={onAdd}/>
        </Container>
    )
}
export default App;