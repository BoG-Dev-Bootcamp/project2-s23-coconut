import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'

export default function Name() {
    const [loggedIn, setLogIn] = useState(false)

    const fetcher = url => axios.get(url).then(res => res.data)

    let { data, isLoading, isValidating } = useSWR(`/api/user/verify`, fetcher)

    if (isLoading) return <div><h2>Loading</h2></div>

    console.log(data)

    if(loggedIn) {
        return (
            <>
                <h1><Link href="/">Dog Training</Link></h1>
                <h2>Already Logged In</h2>
                <p>{data}</p>
            </>
        )
    }

    return (
        <>
            <h1><Link href="/">Dog Training</Link></h1>
            <h2>Users</h2>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <input type = "text"  placeholder="username" />
                    <input type = "text"  placeholder="password" />
                    <button onClick={() => setLogIn(true)}>Log In</button>
                    <button onClick={() => setLogIn(false)}>Log Out</button>
                </>
            )}
        </>
    )
}