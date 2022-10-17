import Head from 'next/head';
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Style from '../styles/login.module.css'
import Menu from './components/menu.js'
import Title from './components/title'
import LoginTitle from './components/loginForm';
import Footer from './components/footer.js'
import Favicon from './img/favicon.ico'

const Login = () => {
    const router = useRouter();

    //ログイン処理（CookieにsignedIn=trueとする）
    const login = () => {
        var pass = document.forms.id_form1.pass.value;

        if(pass == process.env.NEXT_PUBLIC_PASSWORD)
        {
        Cookies.set("_able_to_enter", "true");
        router.replace("/private");
        }
    }

    return (
        <>
             <Head>
                <title>login</title>
                <link rel="icon" href={Favicon} id="favicon" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div className={Style.bodyWrap}>
                <Title />
                <Menu />
                <LoginTitle/>
                <div className={Style.inputWrap}>
                    <form action="" method='post' onSubmit={login} name="form1" id="id_form1">
                        <input type="password" className={Style.inputForm} id ="pass" name="password"　placeholder="password" onKeyDown={login}></input>
                    </form>
                    <button  onClick={login}><div className={Style.loginBtn}>ENTER</div></button>
                </div>
            </div>
            <div className={Style.footer}>
                <Footer />
            </div>
        </>
    );

    
}

export default Login;