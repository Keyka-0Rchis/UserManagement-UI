import React from 'react';
import styles from './DeleteUI.module.css'

function DeleteUI (
    props:{

    }
){
    return (
        <div className={styles.DeleteUI}>
            <div className={styles.DeleteUIWrapper}>
                <form className="deleteUserForm">
                    <fieldset className="deleteUserFormField">
                        <legend>ユーザー削除</legend>
                        <label htmlFor="deleteId">削除するID</label>
                        <input type="text" name="deleteId" id="deleteId"></input>
                        <button id="deleteSubmit" type="submit">実行</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default DeleteUI;