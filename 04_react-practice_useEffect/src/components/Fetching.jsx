import { useId, useState, useEffect } from "react"

export function Fetching() {

    const [fetchedData, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => {
                if(!data.ok) throw new Error(`Response Status: ${data.status}`)
                return data.json()
            })
            .then(result => setData(result))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <ul>
                {
                    fetchedData.map(user => (
                        <li key={user.id}>
                            <div>
                                <p>
                                    Name: {user.name}
                                </p>
                                <p>
                                    User Name: {user.username}
                                </p>
                                <p>
                                    Email: {user.email}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}