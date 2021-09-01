import Head from 'next/head'

import Style from '../styles/Home.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import Top from './components/top.js'
import Works from './components/work.js'

export default function Home()
{
  return (
    <>
      <Head>
        <title>chilly isle</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter"
            rel="stylesheet"
          />
      </Head>
      <div className={Style.bodyWrap}>
        <Title />
        <Menu />
        <Top />
        <Works />
        <Works />
        <Works />
        <Works />
      </div>
    </>
  )
}