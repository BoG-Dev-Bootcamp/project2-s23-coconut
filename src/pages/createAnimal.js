import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

async function createAnimal(url, n, ht, dob) {
        const res = await axios.post(url, {
            name: n,
            hoursTrained: ht,
            dateOfBirth: dob
        })
    return res.data
}

export default function CreateAnimal() {
    
    const [ n, setName ] = useState("")
    const [ ht, setHours ] = useState("")
    const [ dob, setDoB ] = useState("")

    return (
        <>
            <h1><Link href="/">Dog Training</Link></h1>
            <div className="login_body"><h2>Create animal</h2>
            <>
                    <input type = "text"  placeholder="name" value={n}
                        onChange={(event) => {
                            setName(event.target.value)
                        }} />
                    <input type = "text"  placeholder="hours trained" value={ht}
                        onChange={(event) => {
                            setHours(event.target.value)
                        }} />
                    <input type = "text"  placeholder="date of birth" value={dob}
                        onChange={(event) => {
                            setDoB(event.target.value)
                        }} />
                    <button onClick={() => {
                        createAnimal(`/api/animal`, n, ht, dob)
                        window.location.pathname = '/'
                    }}>Log an animal</button>
                </></div>
        </>
    )
}