import { useState, useEffect } from 'react'

export function Input () {
    const [currentInput, setInput] = useState('My App')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        document.title = currentInput || 'My App'
    }, [currentInput])

    return (
        <>
            <input type="text" onChange={handleInput}/>
        </>
    )
}