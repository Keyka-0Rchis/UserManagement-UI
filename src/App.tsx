import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainMenu from './components/MainMenu/MainMenu';
import AddUI from './components/AddUI/AddUI';

function App() {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
    //SideMenuOpenっていうStateをfalseからスタート。setSideMenuOpenはセッター。
  const toggleSideMenu = () => {
    setSideMenuOpen(prev => !prev);
      //prev=前の状態。falseならtrueへ
  };
  const [Mode ,setMode] = useState<"add"|"delete"|"view"|"mainmenu">("mainmenu");
    //Mode Stateはmainmenuからスタート。メイン画面を変更する。


  return (
    <>
      <div className="header">
        <Header 
          title="ユーザー管理するよ！" 
          onMenuClick = {toggleSideMenu} 
          onTitleClick = {setMode}/>
      </div>
      <div className='main'>
        <div className='inner'>
          <div className='mainContainer'>
            <SideMenu titles={{
              mainmenu: "メインメニュー",
              add: "ユーザー登録",
              delete: "ユーザー削除",
              view: "ユーザー閲覧"
            }}
              onSelect = {setMode}
              isOpen = {SideMenuOpen}/>
            {/* ブラウザの戻るボタンが使えないなどの問題が発覚したので、useStateではなく、routerを用いた書き方に修正 */}
            {/* {Mode === "mainmenu" &&            
              <MainMenu titles={{
                add: "ユーザー登録",
                delete: "ユーザー削除",
                view: "ユーザー閲覧"
              }}
                onSelect = {setMode}/>
            }            
            {Mode === "add" &&
              <AddUI />
             } */}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
