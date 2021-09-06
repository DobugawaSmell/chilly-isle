import Head from 'next/head'
import { client } from "../../libs/client";

import Image from 'next/image'

import Style from '../../styles/morePage.module.css'
import Menu from '../components/menu.js'
import Title from '../components/title'
import Footer from '../components/footer.js'

export default function WorkId({ index }) {
    return(
        <>
            <Head>
            <title>chilly isle/{index.title}</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter"
                rel="stylesheet"
            />
            </Head>
            <main>
                <Title />
                <Menu />
                <div className={Style.contentWrap}>
                    <h1 className={Style.title}>{index.title}</h1>
                    <div className={Style.informationWrap}>
                        <Image src={index.mainIMG.url} className={Style.mainImage} width={656} height={420} ></Image>
                        <div className={Style.textWrap}>
                            <div className={Style.tool}>
                                <div className={Style.designWrap}>
                                    <p>Design:　</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: `${index.design}`,
                                        }}
                                    />
                                </div>
                                <div className={Style.codingWrap}>
                                    <p>Coding:　</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: `${index.coding}`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={Style.text}>
                                <p className={Style.year}>2021</p>      
                                <p className={Style.catch}>{index.catch}</p>
                                <div 
                                    dangerouslySetInnerHTML={{
                                    __html: `${index.text}`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "index"});

    const paths = data.contents.map((content) => `/works/${content.id}`);
    return { paths, fallback: false};
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "index", contentId: id });
  
    return {
      props: {
        index: data,
      },
    };
  };