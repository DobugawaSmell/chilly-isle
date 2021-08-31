import Style from '../../styles/menu.module.css'

let what = "###";
let who = "###";
let how = "###";
let where = "###";

export default function Menu() {
    return(
        <div className={Style.menuWrap}>
            <div className={Style.margin}></div>
            <a className={Style.what} href={what}>what?</a>
            <div className={Style.margin}></div>
            <a href={who}>who?</a>
            <div className={Style.margin}></div>
            <a href={how}>how?</a>
            <div className={Style.margin}></div>
            <a href={where}>where?</a>
            <div className={Style.margin}></div>
        </div>
    )
}