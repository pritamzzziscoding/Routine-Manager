export const TodoClear = ({tasks, setTasks}) => {
    const todoKey = "reactTodo";

    const handleClear = () =>{
        const emptyTask = []
        setTasks(emptyTask)
        localStorage.setItem(todoKey, JSON.stringify(emptyTask))
    }
    return <div className="flex justify-center margin-y">
        <button className="padding border-1 bg-rose-600 text-blue-50 rounded-xl sm:text-2xl" onClick={handleClear}>Clear All</button>
    </div> 
    
}