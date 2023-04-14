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

    let { data, isLoading, isValidating } = useSWR(`/api/admin/animals/` + page, fetcher)

    let listItems

    if (data) {
        listItems = data.map((animal) =>
            <li>{animal}</li>
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
                <div className="list_body"><h2>Animals</h2>
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
                <div className="list_body"><p>Not a valid page</p>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <p>Page: {page}</p></div>
            </>
        )
    }

    return (
        <>
            <h1><Link href="/">Dog Training</Link></h1>
            <div className="list_body"><h2>Animals</h2>
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
