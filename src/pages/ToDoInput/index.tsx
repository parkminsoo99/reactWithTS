import styled from "@emotion/styled";
import {useContext, useState} from 'react';
import {TextInput} from "components/TextInput";
import { Button } from "components/Button";
import { Title } from "components/Title";
import {ToDoListContext} from "contexts/ToDoList";
import { useNavigate } from "react-router-dom";
import { ShowInputButton } from "components/ShowInputButton";
const Container = styled.div`
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props{
    readonly onClose: () => void;
}
export const ToDoInput = () => {
    const [toDo,setToDo] = useState<string>('');
    const {onAdd} = useContext(ToDoListContext);
    const navigate = useNavigate();
    const onAddToDo = () => {
        if(toDo === '') return
        onAdd(toDo);
        setToDo('')
        navigate('/');
    }
    return(
        <Container>  
            <Background />
            <Contents>
                <Title label="할 일 추가" />
                <InputContainer>
                    <TextInput value={toDo} onChange={setToDo}/>
                    <Button label="추가" color="#304FFE" onClick={onAddToDo}/>
                </InputContainer>
                <ShowInputButton show={true} onClick={() => navigate('/')} />
            </Contents>
        </Container>
    )
}