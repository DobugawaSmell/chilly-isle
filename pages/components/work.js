import Style from '../../styles/works.module.css'

let link = '###'

export default function Works(){
    return(
        <div className={Style.worksWrap}>
            <div className={Style.imageWrap}>
            </div>
            <div className={Style.textWrap}>
                <div className={Style.works_h1}>Test_h1</div>
                <div className={Style.works_tag}>1/2/3/4</div>
                <div className={Style.arrowWrap}><a href={link} ><div className={Style.arrow}>→</div></a></div>
            </div>
        </div>
    )
}