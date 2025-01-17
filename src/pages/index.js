import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Dog Training</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Dog Training Links</h1>
      <div className="login_body">
      <Link href="/createAccount">Sign up</Link>
      <Link href="/login">Log in</Link>
      <Link href="/userList">Get a list of users</Link>
      <Link href="/animalList">Get a list of animals</Link>
      <Link href="/trainingList">Get a list of training logs</Link>
      <Link href="/createAnimal">Create an animal</Link>
      <Link href="/createTraining">Create a training log</Link>
    </div>
    </div>
  )
}