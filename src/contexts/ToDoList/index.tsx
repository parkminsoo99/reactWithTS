import {createContext,useState} from 'react';

interface Context{
    readonly toDoList: string[],
    readonly onAdd: (toDo: string) => void,
    readonly onDelete: (toDo:string) => void,
}

export const ToDoListContext = createContext<Context>({
    toDoList: [],
    onAdd: ():void => {},
    onDelete: ():void => {},
})

interface Props{
    children:JSX.Element | JSX.Element[]
}

export const ToDoListContextProvider = ({children}: Props) => {
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
    return (
        <ToDoListContext.Provider
            value={{
                toDoList,
                onAdd,
                onDelete,
            }}>
                {children}
        </ToDoListContext.Provider>
            
    )
}
