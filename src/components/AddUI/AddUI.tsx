import React from 'react';
import styles from './AddUI.module.css'

type MenuMode = 'delete' | 'view';

function AddUI (
    props:{
        titles:{delete:string,view:string}
        onSelect?:(mode:MenuMode) => void}
        //add,delete,stringのタイトルを設定させる。
        //onSelectはまだよくわかんない
){
    const items:{mode:MenuMode ; title:string;iconStyle:string}[]=[
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
    );
}

export default AddUI;