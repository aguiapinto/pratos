import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/estilos.css';
import Imagem_Massa_Bolonhesa from '../Recursos/massa_bolonhesa.jpg';
import Imagem_Bifana from '../Recursos/Bifanas.jpg';
import Imagem_Francesinha from '../Recursos/francesinha.jpg';
import Imagem_Frango_Assado from '../Recursos/frango.jpg';
import Imagem_Bife from '../Recursos/bife.jpg';
import Imagem_Posta from '../Recursos/posta.jpg';
import Imagem_Strogonoff from '../Recursos/strogonof.jpg';
import Imagem_Cozinha from '../Recursos/cozinha_fundo_1.jpg'
//import {EscolhaPratos, MostraInformacao, TiraInformacao} from "../Componentes/script";
import {lista_pratos} from "../Páginas/index";
import { ListaPratosAnteriores} from "../Componentes/script";



export default function Pratos_Anteriores(){
    return(
        <section className="conteudo_pratos_anteriores">
            <h2 id="titulo_pratos_anteriores">Lista de Pratos Anteriores</h2>
            <div className="lista_pratos_anteriores">
                <div className="filtro">
                    <select>
                        <option id="Frango">Frango</option>
                        <option id="Peru">Peru</option>
                        <option id="Vaca">Vaca</option>
                        <option id="Porco">Porco</option>
                    </select>
                </div>
                <ul className="anteriores_lista">
                </ul>
            </div>
        </section>
    );
}