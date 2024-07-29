import {useState} from 'react';
import {ToDoInput} from "pages/ToDoInput";
import { ShowInputButton } from 'components/ShowInputButton';

export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState<boolean>(false);
    
    return(
        <>
            {showToDoInput && <ToDoInput/>}
            <ShowInputButton 
                show={showToDoInput} 
                onClick={() => setShowToDoInput(!showToDoInput)} 
            />
        </>
    )
}