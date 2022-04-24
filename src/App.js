import './App.css';
import React from "react";
import axios from "axios";
import useRequest from "./hooks/useRequest";

function App() {
    const [todos, loading, error] = useRequest(fetchTodos);
    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`);
    }

    if (loading){
        return <h1>идет загрузка...</h1>
    }
    if (error){
        return <h1>Произошла ошыбка.</h1>
    }

    return (
    <div>
        {todos && todos.map(todo =>
            <div key={todo.id} style={{border:'1px solid yellow',padding:'10px'}}>
                <b>{todo.id}.</b> {todo.title}
            </div>
        )}
    </div>
  );
}

export default App;
