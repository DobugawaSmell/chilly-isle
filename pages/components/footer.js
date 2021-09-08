import Image from 'next/image'

import image from '../img/topimage.png'
import title from '../img/Title_white.png'
import Style from '../../styles/footer.module.css'

export default function Footer(){
    return(
        <>
            <div className={Style.imageWrap}>
                <Image src={image.src} className={Style.image} width={520} height={217} />
            </div>
            <div className={Style.bar}>
                <div className={Style.titleWrap}>
                    <Image src={title.src} width={84} height={35} />
                </div>
            </div>
        </>
    );
}