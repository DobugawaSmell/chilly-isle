import Style from '../../styles/title.module.css'

import TitleImage from '../img/Title.png'
import Icon from '../img/icon.svg'

export default function Title(){
    return(
        <div className={Style.titleWrap}>
            <div className={Style.title}>
                <img src={TitleImage.src}/>
            </div>
        </div>
    )
}