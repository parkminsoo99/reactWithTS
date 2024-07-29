import {useState} from 'react';
import {ToDoInput} from "components/ToDoInput";
import { ShowInputButton } from 'components/ShowInputButton';

// interface Props{
//     readonly onAdd : (toDo: string) => void
// }

export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState<boolean>(false);
    
    const onClose =() => {
        setShowToDoInput(false);
    }
    return(
        <>
            {showToDoInput && <ToDoInput onClose={onClose} />}
            <ShowInputButton 
                show={showToDoInput} 
                onClick={() => setShowToDoInput(!showToDoInput)} 
            />
        </>
    )
}