import { useState, useEffect } from "react"

export function GetPost () {
    const [currentId, setId] = useState(null)
    const [currentPost, setPost] = useState('')

    useEffect(() => {
        if (!currentId) return
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentId}`)
            .then((data) => {
                if (!data.ok) throw new Error(`Response error: ${data.status}`)
                return data.json()
            })
            .then(response => setPost(response))
            .catch(error => console.error(error))
    }, [currentId])

    return (
        <>
            <select name="" id="" onChange={(e) => setId(Number(e.target.value))}>
                <option value="">Options</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <article>
                <h2>{currentPost.title}</h2>
                <p>{currentPost.body}</p>
            </article>
        </>
    )
}