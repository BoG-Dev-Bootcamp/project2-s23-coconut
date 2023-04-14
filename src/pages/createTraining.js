import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

async function createTraining(url, date, des, h, a) {
        const res = await axios.post(url, {
            date: date,
            description: des,
            hours: h,
            animal: a
        })
    return res.data
}

export default function CreateTraining() {
    
    const [ date, setDate ] = useState("")
    const [ des, setDes ] = useState("")
    const [ h, setHours ] = useState("")
    const [ a, setAnimal ] = useState("")

    return (
        <>
            <h1><Link href="/">Dog Training</Link></h1>
            <div className="login_body"><h2>Users</h2>
            <>
                    <input type = "text"  placeholder="date" value={date}
                        onChange={(event) => {
                            setDate(event.target.value)
                        }} />
                    <input type = "text"  placeholder="description" value={des}
                        onChange={(event) => {
                            setDes(event.target.value)
                        }} />
                    <input type = "text"  placeholder="hours" value={h}
                        onChange={(event) => {
                            setHours(event.target.value)
                        }} />
                    <input type = "text"  placeholder="animal" value={a}
                        onChange={(event) => {
                            setAnimal(event.target.value)
                        }} />
                    <button onClick={() => {
                        createTraining(`/api/training`, date, des, h, a)
                        window.location.pathname = '/'
                    }}>Create Training</button>
                </></div>
        </>
    )
}
