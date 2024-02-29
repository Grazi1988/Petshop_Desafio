import React from "react";
import "./Header.css";
import Logo from "../../assets/logopet.png";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>
        {/*<h2>Eu sou a header</h2>*/}
        
      <img src={Logo} alt="" />
      
      <form>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar"/>
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </form>

        <div className="cart-icon">
          <FaShoppingCart />
          Compras
        </div>
        

        <div className="user-icon">
          <FaUser />
          Login
        </div>
    
    </header>
  )
}



export default Header