import Head from 'next/head'
import { client } from '../libs/client'
import Link from 'next/dist/client/link'

import Style from '../styles/profile.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import Top from './components/top.js'
import Footer from './components/footer.js'
import Favicon from './img/favicon.ico'


export default function Profile({index})
{
  return (
    <>
      <Head>
        <title>chilly isle</title>
        <link rel="icon" href={Favicon} id="favicon" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className={Style.bodyWrap}>
        <Title />
        <Menu />
        <Top h2={"Profile"}/>
        <div className={Style.worksWrap}>
            <p className={Style.name}>大島涼佑</p>
            <p className={Style.rabel}>1995,08,18-</p>
            <div className={Style.profileWrap}>
            <p className={Style.intro_wrap}>工学部のデザイン学科出身で、ビジュアルのアート的な要素とコードによる
                表現の掛け合わせに興味があります。
                Webサイト上の演出を考え実装することが好きですが、このサイトは作品をスムーズに
                閲覧いただくために簡素な作りとしています。
            </p>
        </div>
            <div className={Style.timeline_wrap}>
                <p className={Style.text_medium}>来歴</p>
                <p className={Style.text_medium}>2018.3　千葉大学工学部デザイン学科卒業</p>
                <p className={Style.text_medium}>2020.3　千葉大学大学院融合理工学府創世工学専攻　修了</p>
                <p className={Style.text_medium}>2020.4　株式会社PIVOT　入社</p>
            </div>
        </div>
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