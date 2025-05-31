import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
//module.cssをインポート。stylesは慣習的な名前。

function Header(props: { title: string ,onMenuClick : () => void }) {
    //Headerを使うときに、Stringを渡してね
    //あと、onMenuClickって名前の引数なし、戻り値なしの関数の中身も書いてね
  return (
    <div className={styles.header}>
      <i className={`fas fa-bars ${styles.bars}`} onClick={props.onMenuClick}></i>
      <Link to="/mainmenu" className={styles.titleLink}>
        <h1 className={styles.title}>{props.title}</h1>
      </Link>
    </div>
  );
}

export default Header;