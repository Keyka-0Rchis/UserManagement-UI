import React from 'react';
import styles from './ViewUI.module.css'

function ViewUI (
    props:{

    }
){
    return (
        <div className={styles.ViewUI}>
            <div className={styles.ViewUIWrapper}>
                <form className="view-user-form">
                    <fieldset className="view-user-form-field">
                        <legend>ユーザー確認</legend>
                        <button  id="view-submit" type="submit">実行</button>
                        <p className="view-area"></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ViewUI;