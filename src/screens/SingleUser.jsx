import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function SingleUser() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        setError("")
        axios.get("https://dummyjson.com/users/" + params.user_id).then(result => {
            setData(result.data)
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
        <div><h1>SingleUser</h1>
            {data && <>
                <p>Name: {data?.firstName} {data?.middleName} {data?.lastName}</p>
                <p>Age: {data?.age}</p>
                <p>Gender: {data?.gender}</p>
                <p>Email: {data?.email}</p>
            </>}
        </div>
    )
}

export default SingleUser