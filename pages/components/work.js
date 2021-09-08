import Style from '../../styles/works.module.css'
import Image from 'next/image'


export default function Works(props){
    return(
        <div className={Style.worksWrap}>
            <div className={Style.textWrap}>
                <div className={Style.works_h1}>{props.title}</div>
                <div className={Style.works_tag}>{props.tag}</div>
            </div>
            <div className={Style.imageWrap}>
                <Image src={props.imageUrl} width={800} height={450} />
            </div>
        </div>
    );
}