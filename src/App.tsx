import React from 'react';
import './App.css';
import Admin from "./compenents/admin/admin";
import Header from "./compenents/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./compenents/Menu";
import Order from "./compenents/Order";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/menu"} element={ <Menu/> }/>
            <Route path={"/order"} element={ <Order/> }/>
            <Route path={"/admin"} element={ <Admin/> }/>
        </Routes>
    </div>
  );
}

export default App;
