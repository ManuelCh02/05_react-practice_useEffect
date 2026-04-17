import { useState, useEffect } from "react"

export function LocalStorage () {
    const [current, setValue] = useState(JSON.parse(localStorage.getItem('value')) ?? '')

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(current))
    }, [current])

    const handleInput = (e) => {
        const value = e.target.value
        setValue(value)
    }

    return (
        <>
            <input type="text" value={current} onChange={handleInput} />
        </>
    )   
}