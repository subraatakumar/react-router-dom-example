
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import sortByFirstname from '../utils/helpers/sortByFirstname'
function Users() {
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [error, setError] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();

    const sort_by_name = searchParams.get("sort_by_name")
    const sort_by_age = searchParams.get("sort_by_age")
    //console.log("rendered")
    console.log("sort_by_name: ", sort_by_name)
    console.log("sort_by_age: ", sort_by_age)
    useEffect(() => {
        setLoading(true);
        setError("")
        axios.get("https://dummyjson.com/users").then(result => {
            //console.log(result.data.users);
            // console.log(sortByFirstname(result.data.users))
            setDatas(result.data.users)
        }).catch(e => {
            setError("Error loading data...")
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        console.log("sort by name is:", sort_by_name)
        setDatas(prev => sortByFirstname(prev, sort_by_name))
    }, [sort_by_name])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error.length > 0) {
        return <div>{error}</div>
    }

    return (
        <div><h1>Users</h1>
            <Link to="/users?sort_by_name=asc" style={{ textDecoration: "none", padding: 10, backgroundColor: "grey", marginRight: 10 }}>Sort Asc By Name</Link>
            <button onClick={() => setSearchParams({ sort_by_name: "dsc", sort_by_age: "asc" })} style={{ textDecoration: "none", padding: 10, backgroundColor: "grey" }}>Sort Dsc By Name</button>
            <ul>
                {
                    datas.map(data => <li key={data.id}><Link to={`/singleuser/${data.id}`}>{data.firstName} {data.lastName}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Users