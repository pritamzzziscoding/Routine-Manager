import { useEffect, useState } from "react"

export const TodoHeader = () => {
    const[currTime,setCurrTime] = useState("-")
    
    function getDateTime(){
        const d = new Date()
        const formattedDate = d.toLocaleDateString()
        const formattedTime = d.toLocaleTimeString()
        setCurrTime(`${formattedDate} - ${formattedTime}`)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            getDateTime()
        },1000)
        return ()=>clearInterval(interval)
    },[])

    return <section className="flex flex-col items-center margin-y">
        <h1 className="font-bold font-mono sm:text-3xl md:text-5xl text-2xl text-blue-950">Todo Application</h1>
        <h2 className="font-mono sm:text-2xl">{currTime}</h2>
    </section>
}