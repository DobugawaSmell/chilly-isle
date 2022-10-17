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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Title />
                <Menu />
                <div className={Style.contentWrap}>
                    <h1 className={Style.title}>{index.title}</h1>
                    <div className={Style.informationWrap}>
                        <Image src={index.mainIMG.url} className={Style.mainImage} width={800} height={450} layout={"intrinsic"} ></Image>
                        <div className={Style.textWrap}>
                            <div className={Style.tool}>
                                <div className={Style.designWrap}>
                                    <div className={Style.designText}><p>Design:　</p></div>
                                    <div className={Style.designToolText}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: `${index.design}`,
                                        }}
                                    />
                                    </div>
                                </div>
                                <div className={Style.codingWrap}>
                                    <div className={Style.codingText}><p>Coding:　</p></div>
                                    <div className={Style.codingToolText}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: `${index.coding}`,
                                        }}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.text}>
                                <p className={Style.year}>{index.year}</p>      
                                <p className={Style.catch}>{index.catch}</p>
                                <div className={Style.detail}>
                                    <div 
                                        dangerouslySetInnerHTML={{
                                        __html: `${index.text}`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={Style.subImage}>
                        <Image src={index.IMG1.url} className={Style.subImage} width={index.IMG1hori} height={index.IMG1vert} layout={"intrinsic"} ></Image>
                        </div>
                        <div className={Style.subImage}>
                        <Image src={index.IMG2.url} className={Style.subImage} width={index.IMG2hori} height={index.IMG2vert} layout={"intrinsic"} ></Image>
                        </div>
                        <a href={index.link}><div className={Style.link}><p>VISIT</p></div></a>
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