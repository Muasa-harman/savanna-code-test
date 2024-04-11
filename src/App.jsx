import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Logout from './pages/Logout';
import Help from './pages/Help';
import Admin from './pages/Admin';
import Mail from './pages/Mail';
import Access from './pages/Access';
import Calender from './pages/Calender';
import Form from './pages/Form';
import Party from './pages/Party';
import Settings from './pages/Settings';
import Documents from './pages/Documents';
import Network from './pages/Network';
import { useContext } from "react";
import {DarkModeContext} from "./context/darkModeContext"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/mail' element={<Mail/>}/>
        <Route path='/access' element={<Access/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/party' element={<Party/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/documents' element={<Documents/>}/>
        <Route path='/network' element={<Network/>}/>
      <Route/>
    </Routes>
     
    </BrowserRouter>
    </div>
  )
}

export default App
