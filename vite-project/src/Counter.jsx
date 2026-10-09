import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Guest");

    const handleClick = () => {
        setCount(count+1);
        console.log(count);
    }

    const handleNameChange = () => {
        setName("Ilde");
    }

    return(
        <>
        <p>Welcome {name}</p>
        <button className="border rounded-sm px-3 text-[#00000] bg-[#7884f0]" onClick={handleNameChange}>
            Who are you?
        </button>
        <h1 id="count">Count is: {count}</h1>
            <button className="border rounded-sm px-3 text-[#00000] bg-[#7884f0]" onClick={handleClick}>
                Add
            </button>
        </>
    )
}

export default Counter