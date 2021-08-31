import Style from '../../styles/top.module.css'

import Tobirae from '../img/topimage.png'

import Title from './title.js'

export default function Top() {
    return(
        <>
            <div className={Style.topWrap}>
                <Title />
                <img className={Style.tobirae} src={Tobirae.src}/>
            </div>
            <h2>Works</h2>
        </>
    )
}