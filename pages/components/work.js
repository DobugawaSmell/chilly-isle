import Style from '../../styles/works.module.css'
import Image from 'next/image'


export default function Works(props){
    return(
        <div className={Style.worksWrap}>
            <Image src={props.imageUrl} className={Style.imageWrap} width={520} height={350} />
            <div className={Style.textWrap}>
                <div className={Style.works_h1}>{props.title}</div>
                <div className={Style.works_tag}>{props.tag}</div>
                <div className={Style.arrowWrap}><div className={Style.arrow}>→</div></div>
            </div>
        </div>
    );
}