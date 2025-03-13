import { MdDelete, MdDone } from "react-icons/md";

export const TodoList = ({tasks, setTasks}) => {
    const todoKey = "reactTodo";

    const handleDelete = (value) => {
        const newTasks = tasks.filter((task)=>{
            return task.content != value
        })
        setTasks(newTasks)
        localStorage.setItem(todoKey, JSON.stringify(newTasks))
    }

    const handleDone = (value) => {
        const newTasks = tasks.map((task)=>{
            if(task.id == value){
                return {id: value, content: value, checked: !task.checked}
            }
            return task
        })
        setTasks(newTasks)
        localStorage.setItem(todoKey, JSON.stringify(newTasks))
    }

    return <ul className="flex flex-col">
        <h1 className="sm:text-2xl font-mono font-bold centering margin-y">Lists of Tasks</h1>
        {
            tasks.map((task,idx)=>{
                return <li key={task.id} className="centering flex justify-between gap-1 font-mono sm:text-2xl w-[95%]">
                    <div className="flex gap-2">
                        <span>{idx+1}: </span>
                        <span className={task.checked ? "checked" : "not-checked"}>{task.content}</span>
                    </div>

                    <span className="flex items-start gap-2">
                        <button className="rounded-full bg-green-500 check text-emerald-50 font-bold sm:text-2xl" onClick={()=>handleDone(task.id)}><MdDone /></button>
                        <button className="rounded-full bg-red-500 check text-emerald-50 font-bold sm:text-2xl" onClick={()=>handleDelete(task.id)}><MdDelete/></button>
                    </span>
                </li>
            })
        }
    </ul>
}