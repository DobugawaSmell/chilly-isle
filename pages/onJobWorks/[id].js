import Head from 'next/head'
import { client } from "../../libs/client";

import Image from 'next/image'

import Style from '../../styles/morePage.module.css'
import Menu from '../components/menu.js'
import Title from '../components/title'
import Footer from '../components/footer.js'

export default function WorkId({ salary }) {
    return(
        <>
            <Head>
            <title>chilly isle/{salary.title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Serif+JP:wght@200;300;400;500&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Title />
                <Menu />
                <div className={Style.contentWrap}>
                    <h1 className={Style.title}>{salary.title}</h1>
                    <div className={Style.informationWrap}>
                        <Image src={salary.mainIMG.url} className={Style.mainImage} width={800} height={450} layout={"intrinsic"} ></Image>
                        <div className={Style.textWrap}>
                            <div className={Style.tool}>
                                <div className={Style.designWrap}>
                                    <div className={Style.designText}><p>Design:　</p></div>
                                    <div className={Style.designToolText}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: `${salary.design}`,
                                        }}
                                    />
                                    </div>
                                </div>
                                <div className={Style.codingWrap}>
                                    <div className={Style.codingText}><p>Coding:　</p></div>
                                    <div className={Style.codingToolText}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                            __html: `${salary.coding}`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.text}>
                                <p className={Style.year}>{salary.year}</p>      
                                <p className={Style.catch}>{salary.catch}</p>
                                <div className={Style.detail}>
                                    <div 
                                        dangerouslySetInnerHTML={{
                                        __html: `${salary.text}`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={Style.subImage}>
                        <Image src={salary.IMG1.url} className={Style.subImage} width={salary.IMG1hori} height={salary.IMG1vert} layout={"intrinsic"} ></Image>
                        </div>
                        <div className={Style.subImage}>
                        <Image src={salary.IMG2.url} className={Style.subImage} width={salary.IMG2hori} height={salary.IMG2vert} layout={"intrinsic"} ></Image>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "salary"});

    const paths = data.contents.map((content) => `/onJobWorks/${content.id}`);
    return { paths, fallback: false};
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "salary", contentId: id });
  
    return {
      props: {
        salary: data,
      },
    };
  };