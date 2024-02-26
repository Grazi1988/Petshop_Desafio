import React from "react"
import "./Header.css"
import Logo from "../../assets/logopet.png"

function Header () {
    return (
        <header>
            {/*<h2>Olá, sou a Header</h2>*/}

            <img src ={Logo} alt="" />

            <nav>
                <ul>
                    <li>Meus pedidos</li>
                    <li>Serviços</li>
                </ul>
            </nav>

            <from>
                <label>Usuário</label>
                <input type="text" placeholder="Digite seu nome"/>

                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha"/>
                
            </from>
        </header>
    )
}

export default Header