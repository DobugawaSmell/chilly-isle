import Head from 'next/head'
import { client } from '../libs/client'

import Style from '../styles/Home.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import Top from './components/top.js'
import Works from './components/work.js'

export default function Home({index})
{
  console.log(index.thumbnail);
  
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
        {index.map((index) =>  (
          <Works key={index.id} image={index.thumbnail} title={index.title} tag={index.tag}/>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "index"});

  return{
    props: {
      index: data.contents,
    },
  };
};