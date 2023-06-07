import React from 'react';
import {NavLink} from "react-router-dom";
import Tea from "../Header/image 2.svg"


const Header = () => {
    return (
        <div className="fixed top-0 flex">
          <div className="container">
              <div className="flex items-center justify-between">
                  <img src={Tea} alt="cup"/>
                  <div className="w-[200px] flex justify-between">
                      <NavLink to={"/menu"}>Menu</NavLink>
                      <NavLink to={"/order"}>Order</NavLink>
                      <NavLink to={"/admin"}>Admin</NavLink>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Header;