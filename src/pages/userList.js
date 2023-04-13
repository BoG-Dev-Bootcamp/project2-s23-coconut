import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'

export default function Name() {
    const [page, setPage] = useState(1)

    const fetcher = async (url) => {
        const res = await axios.get(url)
        return res.data
    }

    let { data, isLoading, isValidating } = useSWR(`/api/admin/users/` + page, fetcher)

    if (isLoading) return <div><h2>Loading</h2></div>

    if (page == 1) {
        return (
            <>
                <h1><Link href="/">Dog Training</Link></h1>
                <h2>Animals</h2>
                {isValidating ? (
                    <h2>Validating</h2>
                ) : (
                    <>
                        <p>{data}</p>
                        <p>Page: {page}</p>
                        <button onClick={() => setPage(page + 1)}>Next</button>
                    </>
            )}
            </>
        )
    }

    if (!data) {
        return (
            <>
                <h1><Link href="/">Dog Training</Link></h1>
                <p>Not a valid page</p>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <p>Page: {page}</p>
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
                    <p>{data}</p>
                    <button onClick={() => setPage(page - 1)}>Previous</button>
                    <p>Page: {page}</p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </>
            )}
        </>
    )
}