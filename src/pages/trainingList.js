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

    let { data, isLoading, isValidating } = useSWR(`/api/admin/training/` + page, fetcher)

    let listItems

    if (data) {
        listItems = data.map((training) =>
            <li>{training}</li>
        );
    }

    if (isLoading) return <div><h2>Loading</h2></div>

    if (page == 1 && !data) {
        return  (
            <>
                <h1><Link href="/">Dog Training</Link></h1>
                <h2>Not logged in as an admin</h2>
            </>
        )
    }

    if (page == 1) {
        return (
            <>
                <h1><Link href="/">Dog Training</Link></h1>
                <div class="list_body"><h2>Training logs</h2>
                {isValidating ? (
                    <h2>Validating</h2>
                ) : (
                    <>
                        {listItems}
                        <p>Page: {page}</p>
                        <button onClick={() => setPage(page + 1)}>Next</button>
                    </>
            )}</div>
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
            <div class="list_body"><h2>Training Logs</h2>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    {listItems}
                    <button onClick={() => setPage(page - 1)}>Previous</button>
                    <p>Page: {page}</p>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </>
            )}</div>
        </>
    )
}