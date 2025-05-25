import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
    //SideMenuOpenっていうStateをfalseからスタート。setSideMenuOpenはセッター。

  const toggleSideMenu = () => {
    setSideMenuOpen(prev => !prev);
      //prev=前の状態。falseならtrueへ
  };
  return (
    <>
      <div className="header">
        <Header title="ユーザー管理するよ！" onMenuClick = {toggleSideMenu}/>
      </div>
      <div className='main'>
        <MainMenu addTitle="ユーザー追加" deleteTitle="ユーザー削除" viewTitle="ユーザー閲覧"/>
      </div>
    </>
  );
}

export default App;
