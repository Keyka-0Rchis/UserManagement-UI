import React from 'react';

function Header(props: { title: string ,onMenuClick : () => void}) {
    //Headerを使うときに、Stringを渡してね
    //あと、onMenuClickって名前の引数なし、戻り値なしの関数の中身も書いてね
  return (
    <>
      <i className="fas fa-bars" onClick={props.onMenuClick}></i>
      <h1>{props.title}</h1>
    </>
  );
}

export default Header;