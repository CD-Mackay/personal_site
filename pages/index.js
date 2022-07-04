import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connor Mackay</title>
        <meta name="description" content="Connor Mackay's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><p>Welcome to my site!</p></div>
    </div>
  )
}
