import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

async function logIn(url, e, p) {
        const res = await axios.post(url, {
            email: e,
            password: p
        })
    return res.data
}

export default function SignIn() {
    
    const [ e, setEmail ] = useState("")
    const [ p, setPassword ] = useState("")

    return (
        <>
            <h1><Link href="/">Dog Training</Link></h1>
            <div className="login_body"><h2>Users</h2>
            <>
                    <input type = "text"  placeholder="email" value={e}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    <input type = "text"  placeholder="password" value={p}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    <button onClick={() => {
                        logIn(`/api/user/verify`, e, p)
                        window.location.href = '/'
                    }}>Log In</button>
                </></div>
        </>
    )
}