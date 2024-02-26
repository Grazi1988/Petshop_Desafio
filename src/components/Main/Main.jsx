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
            <img src={Cama} alt="" />
            <img src={Gato} alt="" />
            <img src={Roupa} alt="" />
            <img src={Tapete} alt="" />
            <img src={Rato} alt="" />
            <img src={Passaro} alt="" />
            <img src={Furão} alt="" />
            <img src={India} alt="" />
        </main>
    )
}

export default Main