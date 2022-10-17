import Style from '../../styles/top.module.css'

export default function Top(props) {
    return(
        <>
            <div className={Style.topWrap}>
                <div className={Style.tobirae}>Portforio</div>
            </div>
            <h2>{props.h2}</h2>
        </>
    )
}