import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Login from "../login";
import { useEffect } from "react";

function SetRouter(rout){
    return new Promise(function(resolve,reject)
    {
        const _router = useRouter();
        resolve(_router);
    })
}

const Auth = ({ children }) => {

    //router
    const router = useRouter();
    const isReady = router.isReady;

    useEffect(() => {
        if(isReady){
            //Cookieのチェック（これをいろいろ認証タイプにより変更）
            const signedIn = Cookies.get("_able_to_enter");
            //signedInがtrueじゃなければ/loginへ
            if (signedIn !== "true") router.replace("/login");
            }
        },[router]);
    
    //何もなければ次へ（そのまま処理）
    return children;
}

export default Auth;