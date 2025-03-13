import { useState } from "react";
import { TodoForm } from "./TodoForm"
import { TodoHeader } from "./TodoHeader"
import { TodoList } from "./TodoList";
import { TodoClear } from "./TodoClear";

export const Todo = () =>{
    const todoKey = "reactTodo";
    
    const [tasks, setTasks] = useState(() => {
        const savedData = localStorage.getItem(todoKey);
        return savedData ? JSON.parse(savedData) : [];
    });

    return <div className="box bg-amber-50/70 centering shadow-2xl border-2 centering w-[80%] margin-y">
        <TodoHeader />
        <TodoForm tasks={tasks} setTasks={setTasks}/>
        <TodoList tasks={tasks} setTasks={setTasks}/>
        <TodoClear tasks={tasks} setTasks={setTasks}/>
    </div>
}