import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function TodoList(
) {

    const [todo, setTodo] = useState([
    ]);
    const [tarea, setTarea] = useState("");

    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/users/YessicaGarrido')

            .then(resp =>
                resp.json())

            .then(data => setTodo(data.todos))


            .catch(error => {
                console.log(error);
            });

    }, [])



    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && tarea.trim() !== "") {
            fetch('https://playground.4geeks.com/todo/todos/YessicaGarrido', {
                method: "POST",
                body: JSON.stringify({
                    label: tarea,
                    is_done: false
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp =>
                    resp.json()
                )
                .then(data => {
                    console.log(data);
                    setTodo([...todo,

                    {
                        id: todo.length + 1,
                        label: tarea,
                        is_done: false

                    }]);
                    setTarea("");
                })
                .catch(error => {

                    console.log(error);
                })

        }
    }
    function eliminarTarea(id) {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok);
                console.log(resp.status);
                if (resp.ok) {
                    const tarea = todo.filter((tarea) => tarea.id !== id);
                    console.log(id);
                    setTodo((tarea));
                }

                return resp.json();
            })
            .then(data => {

                console.log(data);
            })
            .catch(error => {

                console.log(error);
            });

        //setTodo(todo.filter((tarea, i) => i !== index)); console.log(index);



    }

    console.log(todo);
    return (

        <div className="list" id="tarea">
            <div className="filter-content">
                {todo.length} items left
            </div>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                onKeyDown={handleKeyDown}



            />
            <ul>
                {todo.map((tarea) => (
                    <li key={tarea.id} className="tarea-item">
                        <span>{tarea.label}</span>
                        <button onClick={() => eliminarTarea(tarea.id)} className="clean">X</button>

                    </li>
                ))}
            </ul>



        </div>
    )


}
export default TodoList;