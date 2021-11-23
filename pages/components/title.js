import Style from '../../styles/title.module.css'

import TitleImage from '../img/logo-b.svg'
import TitleForMobile from '../img/logo-formob.svg'
import Icon from '../img/icon.svg'

export default function Title(){
    return(
        <div className={Style.titleWrap}>
            <a href={`/`}>
                <div className={Style.title}>
                    <img className={Style.pc} src={TitleImage.src}/>
                    <img className={Style.sp} src={TitleForMobile.src}/>
                </div>
            </a>
        </div>
    )
}