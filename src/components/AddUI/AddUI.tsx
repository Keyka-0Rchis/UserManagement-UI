import React from 'react';
import styles from './AddUI.module.css'

type MenuMode = 'delete' | 'view';

function AddUI (
    props:{

    }
){
    return (
        <div className={styles.AddUI}>
            <div className={styles.AddUIWrapper}>
                <form className="addUserForm">
                    <fieldset className="addUserFormField">
                        <legend>ユーザー登録</legend>
                        <label htmlFor="userName">名前</label>
                        <input type="text" name="userName" id="userName"></input>
                        <label htmlFor="userEmail">メールアドレス</label>
                        <input type="email" name="userEmail" id="userEmail"></input>
                        <button id="addSubmit" type="submit">実行</button>
                        <button type="reset">リセット</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default AddUI;