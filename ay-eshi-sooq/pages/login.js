import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ai Eshi Sooq - Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Login/>
    </div>
  )
}