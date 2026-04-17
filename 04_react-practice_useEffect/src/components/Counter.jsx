import { useState, useEffect } from "react";

export function Counter () {

    const [count, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 100000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <p>
                Counter: <strong>{count}</strong>
            </p>
        </>
    )
}