import React, {useRef, useState} from 'react';
import {useScroll} from "../hooks/useScroll";

const List = () => {
    const [page, setPage] = useState(1)
    const limit = 20;
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => {fetchTodos(limit, page)});

    function fetchTodos(limit, page) {
        fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

    const [todos, setTodos] = useState([])
    return (
        <div ref={parentRef} style={{width:'90%', height:'80vh',overflow:"auto"}}>
            {todos.map(todo =>
                <div key={todo.id} style={{border:'1px solid yellow',padding:'10px'}}>
                    <b>{todo.id}.</b> {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height: '10px', backgroundColor: 'green'}}/>
        </div>
    );
};

export default List;