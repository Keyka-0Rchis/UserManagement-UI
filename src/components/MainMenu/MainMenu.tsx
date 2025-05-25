import React from 'react';
import styles from './MainMenu.module.css'
import { title } from 'process';

type MenuMode = 'add' | 'delete' | 'view';
//modeでつかうMenuModeを定義

function MainMenu (
    props:{
        titles:{add:string,delete:string,view:string}
        onSelect?:(mode:MenuMode) => void}
        //add,delete,stringのタイトルを設定させる。
        //onSelectはまだよくわかんない
){
    const items:{mode:MenuMode ; title:string;iconStyle:string}[]=[
        {mode:'add',title:props.titles.add,iconStyle:styles.addIcon},
        {mode:'delete',title:props.titles.delete,iconStyle:styles.deleteIcon},
        {mode:'view',title:props.titles.view,iconStyle:styles.viewIcon}
    ]
    //この後forループっぽくするために、一つ一つのmode毎に変数をまとめておく。
    return (
        <div className={styles.mainmenu}>
            <div className={styles.mainmenuWrapper}>
                {items.map((item) =>(
                    <div
                        key={item.mode} 
                        className={`${styles.menuIcon} ${item.iconStyle}`}
                        onClick={()=>props.onSelect?.(item.mode)}
                    >
                        <p className={styles.iconPrint}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
////自分で書いたやつ。繰り返しが多いって。。。        
/*         <div className={styles.mainmenu}>
            <div className={styles.mainmenuWrapper}>
                <div className={`${styles.menuIcon} ${styles.addIcon}`}>
                    <p className={styles.iconPrint}>{props.addTitle}</p>
                </div>
                <div className={`${styles.menuIcon} ${styles.deleteIcon}`}>
                    <p className={styles.iconPrint}>{props.deleteTitle}</p>
                </div>
                <div className={`${styles.menuIcon} ${styles.viewIcon}`}>
                    <p className={styles.iconPrint}>{props.viewTitle}</p>
                </div>
            </div>
        </div> */
    );
}
//stylesのclassNameは-があるとだめ。camelCaseじゃないとエラーになる。
export default MainMenu;