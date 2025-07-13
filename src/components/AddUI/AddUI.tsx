import { useState } from 'react';
import React from 'react';
import styles from './AddUI.module.css'

function AddUI (
    props:{

    }
){
    //デフォルトの値をセット
    const [name , setName] = useState("");//useState<string>の略
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    //処理本体
    const addHandleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();//リロード阻止

        fetch("/UserController/add",{
            method:"Post",
            headers:{"Content-Type":"application/json"},
            //stringifyってのは以下すべてをまとめて文字列としてJSONにするってこと。わかりづらいよね。
            body:JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then( response => {
            //これがないとcatchされないんだよ？ひどくない？
            if(!response.ok) throw new Error("追加に失敗しました");
            //なにもなければここ、素通りだよ？
            return response.json();
        })
        .then(data=>{
            console.log("成功",data);
            alert("追加に成功しました")
        })
        .catch(err => {
            console.error("エラー",err);
            alert("エラーが発生しました");
        })
    }

    return (
        <div className={styles.AddUI}>
            <div className={styles.AddUIWrapper}>
                <form className="addUserForm">
                    <fieldset className="addUserFormField">
                        <legend>ユーザー登録</legend>
                        <label htmlFor="userName">名前</label>
                        <input type="text" name="userName" id="userName" value={name} onChange={(event) => setName(event.target.value)}></input>
                        <label htmlFor="userEmail">メールアドレス</label>
                        <input type="email" name="userEmail" id="userEmail" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        <label htmlFor="userPassword">パスワード</label>
                        <input type="password" name="userPassword" id="userPassword" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        <button id="addSubmit" type="submit">実行</button>
                        <button type="reset">リセット</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default AddUI;