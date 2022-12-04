import Head from 'next/head'
import Image from 'next/image'
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'

export default function Home() {
  return (
    <>
      
    <Head>
      <title>Pizza-Majid</title>
      <meta name="description" content="Best Pizza in the Town" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
</>
  )
}
