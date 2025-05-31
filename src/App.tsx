import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainMenu from './components/MainMenu/MainMenu';
import AddUI from './components/AddUI/AddUI';
import DeleteUI from './components/DeleteUI/DeleteUI';
import ViewUI from './components/ViewUI/ViewUI';

function App() {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
    //SideMenuOpenっていうStateをfalseからスタート。setSideMenuOpenはセッター。
  const toggleSideMenu = () => {
    setSideMenuOpen(prev => !prev);
      //prev=前の状態。falseならtrueへ
  };
  ////Stateは今後無限に増える可能性がある・・・。便利だけど、それだけには頼れない。
  //const [Mode ,setMode] = useState<"add"|"delete"|"view"|"mainmenu">("mainmenu");
    //Mode Stateはmainmenuからスタート。メイン画面を変更する。

  return (
    //Routerタグは一番外！
    <Router>
      <div className="header">
        <Header 
          title="ユーザー管理するよ！" 
          onMenuClick = {toggleSideMenu}
        />
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
              isOpen = {SideMenuOpen}/>
            {/* ブラウザの戻るボタンが使えないなどの問題が発覚したので、useStateではなく、routerを用いた書き方に修正 */}
            {/* 
            {Mode === "mainmenu" &&            
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
            {/* Routesの中に分岐を書く。Routeにそれぞれのパスとコンポーネントを。 */}
            <Routes>
              <Route 
                path="/mainmenu"
                element={
                  <MainMenu 
                    titles={{
                      add: "ユーザー登録",
                      delete: "ユーザー削除",
                      view: "ユーザー閲覧"
                    }}
                  />
                }
              />
              <Route path="/add" element={<AddUI />} />
              <Route path="/delete" element={<DeleteUI />} />
              <Route path="/view" element={<ViewUI />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
