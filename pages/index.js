import Head from 'next/head'
import { client } from '../libs/client'

import Style from '../styles/Home.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import Top from './components/top.js'
import Works from './components/work.js'
import Footer from './components/footer.js'

export default function Home({index})
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
        {index.map((index) =>  (
          <a key={index.id} href={`/works/${index.id}`}>
          <Works imageUrl={index.thumbnail.url} title={index.title} tag={index.tag}/>
          </a>
        ))}
      </div>
      <Footer />
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