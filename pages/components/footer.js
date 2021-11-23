import Image from 'next/image'

import title from '../img/logo-w.svg'
import Style from '../../styles/footer.module.css'

export default function Footer(){
    return(
        <>
            <div className={Style.bar}>
                <a href={`/`}>
                    <div className={Style.titleWrap}>
                        <Image src={title.src} width={84} height={35} />
                    </div>
                </a>
            </div>
        </>
    );
}