import Style from '../../styles/top.module.css'

export default function LoginTitle() {
    return(
        <>
            <div className={Style.topWrap}>
                <div className={Style.tobirae}>Portforio</div>
            </div>
            <h2>パスワードを入力してください</h2>
        </>
    )
}