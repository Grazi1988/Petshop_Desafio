import React from "react"
import "./Main.css"
import Cama from "./fotosMain/camapet.jpg"
import Gato from "./fotosMain/gato.jpg"
import Roupa from "./fotosMain/roupinhapet.jpg"
import Tapete from "./fotosMain/tapetegelado.jpg"
import Rato from "./fotosMain/ratinho.jpg"
import Passaro from "./fotosMain/periquitos.jpg"
import Furão from "./fotosMain/furão.jpg"
import India from "./fotosMain/porquinho.jpg"

function Main () {
     return (
        <main>
            {/*<h2>Sou a main</h2>*/}

        <section>
            <img className="fotosMain"src={Cama} alt="Cama do pet" />
            <p>Caminha com encosto de cabeça para pets</p>
            <h3>R$65,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img className="fotosMain" src={Gato} alt="Roupinha de gato" />
            <p>Roupinha para gatos</p>
            <h3>R$50,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={Roupa} alt="Roupinha do cachorro" />
            <p>Roupinha de lã para cachorros</p>
            <h3>R$95,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={Tapete} alt="Tapete pinguim" />
            <p>Tapete Gelado Pinguim</p>
            <h3>R$128,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={Rato} alt="Ratinho" />
            <p>Hamster Macho</p>
            <h3>R$200,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={Passaro} alt="Passarinhos coloridos" />
            <p>Periquitos Macho e Femea</p>
            <h3>R$50,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={Furão} alt="Furãozinho" />
            <p>Furão Filhote</p>
            <h3>R$5.000,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>

        <section>
            <img src={India} alt="Porco da India" />
            <p>Porquinho da India</p>
            <h3>R$600,00</h3>
            <button className="comprarButton">Comprar</button>
        </section>
        </main>
    )
}

export default Main