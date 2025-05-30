import React from 'react';
import styles from './Header.module.css'
//module.cssをインポート。stylesは慣習的な名前。

function Header(props: { title: string ,onMenuClick : () => void , onTitleClick:(mode:"add"|"delete"|"view"|"mainmenu") => void}) {
    //Headerを使うときに、Stringを渡してね
    //あと、onMenuClickって名前の引数なし、戻り値なしの関数の中身も書いてね
  return (
    <div className={styles.header}>
      <i className={`fas fa-bars ${styles.bars}`} onClick={props.onMenuClick}></i>
      <h1 className={styles.title} onClick={() => props.onTitleClick("mainmenu")}>{props.title}</h1>
    </div>
  );
}

export default Header;