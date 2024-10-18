
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Users() {
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true);
        setError("")
        axios.get("https://dummyjson.com/users").then(result => {
            setDatas(result.data.users)
        }).catch(e => {
            setError("Error loading data...")
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error.length > 0) {
        return <div>{error}</div>
    }

    return (
        <div><h1>Users</h1>
            <ul>
                {
                    datas.map(data => <li key={data.id}><Link to={`/singleuser/${data.id}`}>{data.firstName} {data.lastName}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Users