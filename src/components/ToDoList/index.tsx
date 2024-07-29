import styled from "@emotion/styled";
import {ToDoItem} from "components/ToDoItem";

interface Props{
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: (todo:string) => void
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const ToDoList = ({toDoList,onDelete} : Props) => {
    console.log("TO",toDoList)
    return (
        <Container>
            {toDoList.map((todo) => (
                <ToDoItem 
                    key={todo}
                    label={todo}
                    onDelete={() => {
                        console.log(todo)
                        if (typeof onDelete ==='function') onDelete(todo)
                    }}
                />
            ))}
        </Container>
    )
}