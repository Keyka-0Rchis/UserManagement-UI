import React from 'react';
import styles from './SideMenu.module.css'
import { title } from 'process';
import { Link } from 'react-router-dom';

//modeでつかうSideModeを定義
//type SideMode = 'mainmenu' | 'add' | 'delete' | 'view';

type LinkTo = "/mainmenu" | "/add" | "/delete" | "/view";

function SideMenu (
    props:{
        titles:{mainmenu:string,add:string,delete:string,view:string}
        //onSelect?:(mode:SideMode) => void
        //add,delete,stringのタイトルを設定させる。
        //onSelectはまだよくわかんない
        isOpen:boolean}
){
    const items:{mode:LinkTo ; title:string;iconStyle:string}[]=[
        {mode:"/mainmenu",title:props.titles.mainmenu,iconStyle:styles.mainmenuIcon},
        {mode:"/add",title:props.titles.add,iconStyle:styles.addIcon},
        {mode:"/delete",title:props.titles.delete,iconStyle:styles.deleteIcon},
        {mode:"/view",title:props.titles.view,iconStyle:styles.viewIcon}
    ]
    //この後forループっぽくするために、一つ一つのmode毎に変数をまとめておく。
    return (
        <div className={props.isOpen? styles.sidemenuOpen:styles.sidemenuClose}>
            <div className={styles.sidemenuWrapper}>
                {items.map((item) =>(
                    <Link
                        to={item.mode}
                        key={item.mode} 
                        className={`${styles.menuIcon} ${item.iconStyle}`}
                    >
                        <p className={styles.iconPrint}>{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideMenu;