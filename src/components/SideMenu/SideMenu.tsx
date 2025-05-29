import React from 'react';
import styles from './SideMenu.module.css'
import { title } from 'process';

//modeでつかうSideModeを定義
type SideMode = 'add' | 'delete' | 'view';

function SideMenu (
    props:{
        titles:{add:string,delete:string,view:string}
        onSelect?:(mode:SideMode) => void
        //add,delete,stringのタイトルを設定させる。
        //onSelectはまだよくわかんない
        isOpen:boolean}
){
    const items:{mode:SideMode ; title:string;iconStyle:string}[]=[
        {mode:'add',title:props.titles.add,iconStyle:styles.addIcon},
        {mode:'delete',title:props.titles.delete,iconStyle:styles.deleteIcon},
        {mode:'view',title:props.titles.view,iconStyle:styles.viewIcon}
    ]
    //この後forループっぽくするために、一つ一つのmode毎に変数をまとめておく。
    return (
        <div className={props.isOpen? styles.sidemenuOpen:styles.sidemenuClose}>
            <div className={styles.sidemenuWrapper}>
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

export default SideMenu;