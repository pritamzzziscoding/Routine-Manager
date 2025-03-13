import { useState } from "react"

export const TodoForm = ({tasks, setTasks}) => {
    const todoKey = "reactTodo";
    const [value, setValue] = useState({ id: "", content: "", checked: false })

    const handleChange = (evt)=> {
        setValue({ id: evt.target.value, content: evt.target.value, checked: false })
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()

        if(!value.content){
            setValue({ id: "", content: "", checked: false })
            return;
        }

        const found = tasks.find((task)=>{
            return task.content == value.content
        })

        if(found){
            setValue({ id: "", content: "", checked: false })
            return;
        }
        const newTask = [...tasks, value]
        localStorage.setItem(todoKey, JSON.stringify(newTask))
        setTasks(newTask)
        setValue({ id: "", content: "", checked: false })
    }


    return <form className="flex w-full justify-center" onSubmit={handleSubmit}>
            <input className="padding w-[70%] border-1 font-mono sm:text-xl" type="text" placeholder="Task..." value={value.content} onChange={handleChange} />
            <button className="padding bg-green-600 text-blue-950 border-1 border-l-0 sm:text-xl" type="submit">Add Task</button>
    </form>
}