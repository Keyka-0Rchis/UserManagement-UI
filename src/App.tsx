import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
    //SideMenuOpenっていうStateをfalseからスタート。setSideMenuOpenはセッター。

  const toggleSideMenu = () => {
    setSideMenuOpen(prev => !prev);
      //prev=前の状態。falseならtrueへ
  };
  return (
    <div className="header">
      <Header title="ユーザー管理するよ！" onMenuClick = {toggleSideMenu}/>
    </div>
  );
}

export default App;
