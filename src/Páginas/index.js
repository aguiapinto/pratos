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
import Imagem_Peru from '../Recursos/bife_peru.jpg';
import Imagem_C_P_Alentejana from '../Recursos/carne_de_porco_a_alentejana.jpg';
import Imagem_Costeletinhas from '../Recursos/costeletinhas.jpg';
import Imagem_Carbonara from '../Recursos/carbonara.jpg';
import Imagem_Massa_Cotovelinho from '../Recursos/massa_cotovelinho.jpg';
import Imagem_Vitela_Estufada from '../Recursos/vitela_estufada.jpg';
import Imagem_Peito_Frango from '../Recursos/peito_frango.jpg';
import Imagem_Cozinha from '../Recursos/cozinha_fundo_1.jpg';

import { EscolhaPratos, MostraInformacao, PratoEscolhido, TiraInformacao, Lista_toda, Valor_Pratos_Anteriores, ListaPratosAnteriores} from "../Componentes/script";



export const lista_pratos = [{id:"massa_bolonhesa", nome:"Massa Bolonhesa", imagem:Imagem_Massa_Bolonhesa, carne:"vaca", ingrediente1: "massa", ingrediente2:"queijo"},
                        {id:"francesinha", nome:"Francesinha", imagem:Imagem_Francesinha, carne:"vaca", ingrediente1:"batatas", ingrediente2:"molho"},
                        {id:"frango_assado", nome:"Frango Assado", imagem:Imagem_Frango_Assado, carne:"frango", ingrediente1:"massa", ingrediente2:"arroz", ingrediente3:"batata"},
                        {id:"strogonof", nome:"Strogonoff", imagem:Imagem_Strogonoff, carne:"peru", ingrediente1:"arroz", ingrediente2:"massa"},
                        {id:"bife", nome:"Bife", imagem:Imagem_Bife,  carne:"vaca", ingrediente1:"batatas", ingrediente2:"massa", ingrediente3: "arroz"},
                        {id:"posta", nome:"Posta", imagem:Imagem_Posta, carne:"vaca", ingrediente1:"arroz", ingrediente2:"molho"},
                        {id:"bifanas", nome:"Bifanas", imagem:Imagem_Bifana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"bife_peru", nome:"Bife de Peru", imagem:Imagem_Peru, carne:"peru", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"c_p_alentejana", nome:"Carne de Porco à Alentejana", imagem:Imagem_C_P_Alentejana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"coteletinhas", nome:"Costeletinhas", imagem:Imagem_Costeletinhas, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"carbonara", nome:"Carbonara", imagem:Imagem_Carbonara, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"massa_cotovelinho", nome:"Massa do Cotovelinho", imagem:Imagem_Massa_Cotovelinho, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"vitela_estufada", nome:"Vitela Estufada", imagem:Imagem_Vitela_Estufada, carne:"vaca", ingrediente1:"pao", ingrediente2:"massa"},
                        {id:"peito_frango", nome:"Peito de Frango", imagem:Imagem_Peito_Frango, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"}];



export default function FuncaoPratos(event){
    return(
        <section className="todos_pratos" onLoad={(num) => MostraInformacao(1)}>
            <h2>Pratos Disponíveis</h2>
            <div className="informacao">
                <span className="botao_fechar" onClick={(num) =>TiraInformacao(1)}>&times;</span>
                <h2>Escolha o prato da refeição anterior</h2>
            </div>
            <div className="pratos_opcoes" style={{backgroundImage:`url(${Imagem_Cozinha})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
                {lista_pratos.map((pratos, id) =>{
                    return(
                    <div key={id} className="prato">
                        <img id="imagem_prato" onClick={event => {EscolhaPratos(event); MostraInformacao(3); PratoEscolhido(event)}} className={pratos.carne} src={pratos.imagem} alt={pratos.nome}></img>
                        <h3 id="nome" onClick={event =>{ EscolhaPratos(event); MostraInformacao(3)}} className={pratos.carne}>{pratos.nome}</h3>
                    </div>
                )})}
            </div>
            <div className="popup_opcoes">
                <h2>Escolha uma das opções</h2>
                <div className="opcoes">
                    <div className="pratos_sugeridos">
                    <Link className="pratos_sugestao" to='/Opcoes_pratos'><input type="button" name="sugestoes" value={"Sugerir pratos"}></input></Link>
                    </div>
                    <div className="lista_pratos">
                    <Link className="lista_prato" to='/Pratos_Anteriores'><input type="button" name="lista" value={"Adicionar á lista de pratos"} onClick={event => {Valor_Pratos_Anteriores(event); setTimeout(() => {ListaPratosAnteriores(event);}, 2000) }}></input></Link> 
                    </div>
                </div>
                <div className="escolha_outro_prato">
                    <input type="button" name="prato2" value={"Escolher outro prato"} onClick={event => {TiraInformacao(3)}}></input>
                </div>
                <div className="volta_atras">
                    <input type="button" className="paraTras" name="voltar" value={"Voltar atrás"} onClick={event =>{TiraInformacao(3); Lista_toda(event)}}></input>
                </div>
            </div>
            <div className="cobre_escolha"></div>
        </section>
    );
}