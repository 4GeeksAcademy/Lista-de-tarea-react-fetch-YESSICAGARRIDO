import React from "react";
import { useState } from "react";

function TodoList(
) {
    const [todo, setTodo] = useState([
    ]);
    const [tarea, setTarea] = useState("");



    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && tarea.trim() !== "") {
            setTodo([...todo, tarea.trim()]);
            setTarea("");
        }
    }
    function eliminarTarea(index) { 
        setTodo(todo.filter((tarea, i) => i !== index));
      console.log(index)  ;
        
    }

    console.log(todo);
    return (
        <div className="list" id="tarea">
            <input 
                type="text"
                placeholder="What needs to be done?"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                onKeyDown={handleKeyDown}
              


            />
            <ul>
                {todo.map((tarea, index) => (
                    <li key={index} className="tarea-item">


                        <span>{tarea}</span>
                        <button onClick={() => eliminarTarea(index)} className="clean">X</button>

                    </li> 
                ))}
            </ul>
            <div className="filter-content">
                {todo.length} items left
            </div>
            

        </div>
    )


}
export default TodoList;