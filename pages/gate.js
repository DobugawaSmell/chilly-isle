import Head from 'next/head'
import { client } from '../libs/client'
import Link from 'next/dist/client/link'
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";

import Style from '../styles/profile.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import Top from './components/top.js'
import Footer from './components/footer.js'
import Favicon from './img/favicon.ico'

import Auth from "./api/auth"

const Gate = () =>
{

    const router = useRouter();

    //ログアウト処理
    const logout = () => {
        Cookies.remove("signedIn");
        router.replace("/login");
    }

  return (
    <Auth>
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
            <p className={Style.name}>WaitPlease...</p>
        </div>
      </div>
      <Footer />
    </Auth>
  );
}

export default Gate;

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "index"});
  
    return{
      props: {
        index: data.contents,
      },
    };
  };