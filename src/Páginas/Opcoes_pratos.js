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
import { lista_pratos1 } from "../Componentes/script";
import { MostraInformacao, Receita, TiraInformacao} from "../Componentes/script";
import { Informacao_receita } from "../Componentes/informacao_receita";

/*export let lista_pratos1 = [{id:"massa_bolonhesa", nome:"Masssa Bolonhesa", imagem:Imagem_Massa_Bolonhesa, carne:"vaca", ingrediente1: "massa", ingrediente2:"queijo"},
{id:"francesinha", nome:"Francesinha", imagem:Imagem_Francesinha, carne:"vaca", ingrediente1:"pao", ingrediente2:"molho"},
{id:"frango_assado", nome:"Frango Assado", imagem:Imagem_Frango_Assado, carne:"frango", ingrediente1:"massa", ingrediente2:"molho"},
{id:"strogonof", nome:"Strogonoff", imagem:Imagem_Strogonoff, carne:"peru", ingrediente1:"arroz", ingrediente2:"natas"},
{id:"bife", nome:"Bife", imagem:Imagem_Bife,  carne:"vaca", ingrediente1:"batatas", ingrediente2:"cogumelos"},
{id:"posta", nome:"Posta", imagem:Imagem_Posta, carne:"vaca", ingrediente1:"arroz", ingrediente2:"molho"},
{id:"bifanas", nome:"Bifanas", imagem:Imagem_Bifana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"}];
*/

export default function FuncaoPratos_1(){
    return(
        <section className="todos_pratos" onLoad={(num) => MostraInformacao(2)} >
            <h2>Pratos Disponíveis</h2>
            <div className="informacao_opcoes_pratos">
                <span className="botao_fechar" onClick={(num) => TiraInformacao(2)}>&times;</span>
                <h2>Aqui estão apresentados os pratos indicados para confecionar de acordo com
                    o prato da refeição anterior, selecionado na página inicial.<br></br><br></br>
                    Escolha um que pretenda confecionar para verificar a receita e ingredientes!</h2>
            </div>
            <div className="pratos_opcoes" style={{backgroundImage:`url(${Imagem_Cozinha})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>              
                {lista_pratos1.map((pratos, id) =>{
                    return(
                    <div key={id} className="prato_1">
                        <img id="imagem_prato" className={pratos.carne} src={pratos.imagem} alt={pratos.nome} onClick={Receita}></img>
                        <h3 id="nome" className={pratos.carne}>{pratos.nome}</h3>
                    </div>
                )})}
            
            <div className="popup_receita">
                <div className="botao_fechar" onClick={Receita}>&times;</div>
                <div className="conteudo_receita">
                    <div className="imagem_receita"></div>
                    <div className="informacao_receita">
                        <h2>Receita</h2>
                        <Informacao_receita />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}