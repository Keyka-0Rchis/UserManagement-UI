import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
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
        <div className='inner'>
          <div className='mainContainer'>
            <SideMenu titles={{
              add: "ユーザー登録",
              delete: "ユーザー削除",
              view: "ユーザー閲覧"
            }}
              isOpen = {SideMenuOpen}/>
            <MainMenu titles={{
              add: "ユーザー登録",
              delete: "ユーザー削除",
              view: "ユーザー閲覧"
            }}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
