// import styled from "@emotion/styled";
// import {DataView} from "pages/DataView";
// import {ToDoListContextProvider} from "contexts/ToDoList";
// import {Routes, Route} from 'react-router-dom';
// import { ToDoInput } from "pages/ToDoInput";
// import {Header} from "components/Header";
// const Container = styled.div`
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: #b29999;
// `
// const NotFound = styled.div`
//     text-align: center;
// `


// function App() {

//     return(
//         <Container> 
//             <ToDoListContextProvider>
//                 <Header />
//                 <Routes>
//                     <Route
//                         path="/"
//                         element={<DataView />}
//                     />
//                     <Route path="/add" element={<ToDoInput />} />
//                     <Route
//                         path="*"
//                         element={
//                             <NotFound>
//                                 404
//                                 <br />
//                                 Not FOUND
//                             </NotFound>
//                         }
//                     />
//                 </Routes>
//             </ToDoListContextProvider>     
//         </Container>
//     )
// }
// export default App;

import styled from '@emotion/styled';
import { Header } from 'components/Header';
import { BlogPost } from 'components/BlogPost';
import {useState,useEffect} from "react";
import {Button} from "components/Button";
import {Form} from "components/Form";
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
    overflow: scroll;
`;
const ButtonContainer = styled.div`
    position: absolute;
    right: 40px;
    bottom: 40px;
`


interface Post {
    readonly id: number,
    readonly userId: number;
    readonly title:string,
    readonly body:string,
}
function App() {
    const [posts,setPosts] = useState<ReadonlyArray<Post>>([]);
    const [showForm,setShowForm] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log('Response:', res);
            return res.json();
        })
        .then((json) => {
            console.log('JSON:', json);
            setPosts(json);
        })
        .catch((e) => {
            console.log(e);
        });
    }, []);
    return(
        <Container>
            <Header />
            {posts.map((post) => (
                <BlogPost id={post.id} title={post.title} body={post.body} />
            ))}
            <ButtonContainer>
                <Button label="등록" onClick={() => setShowForm(!showForm)}/>
            </ButtonContainer>
            {showForm && <Form onClose={() => setShowForm(!showForm)}/>}
        </Container>
    );
}

export default App;