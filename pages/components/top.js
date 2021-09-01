import Style from '../../styles/top.module.css'

import Tobirae from '../img/topimage.png'

import Title from './title.js'

export default function Top() {
    return(
        <>
            <div className={Style.topWrap}>
                <div className={Style.tobirae}>Portforio</div>
            </div>
            <h2>Works</h2>
        </>
    )
}