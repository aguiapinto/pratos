import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import { lista_pratos } from "../Páginas";
//import { lista_pratos1 } from "../Páginas/Opcoes_pratos";
import { lista_receitas } from "./informacao_receita";
import { Receita_bolonhesa } from "./informacao_receita";
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
import Imagem_Cozinha from '../Recursos/cozinha_fundo_1.jpg'



export let lista_pratos1 = [{id:"massa_bolonhesa", nome:"Massa Bolonhesa", imagem:Imagem_Massa_Bolonhesa, carne:"vaca", ingrediente1: "massa", ingrediente2:"queijo"},
    {id:"francesinha", nome:"Francesinha", imagem:Imagem_Francesinha, carne:"vaca", ingrediente1:"pao", ingrediente2:"molho"},
    {id:"frango_assado", nome:"Frango Assado", imagem:Imagem_Frango_Assado, carne:"frango", ingrediente1:"massa", ingrediente2:"molho"},
    {id:"strogonof", nome:"Strogonoff", imagem:Imagem_Strogonoff, carne:"peru", ingrediente1:"arroz", ingrediente2:"natas"},
    {id:"bife", nome:"Bife", imagem:Imagem_Bife,  carne:"vaca", ingrediente1:"batatas", ingrediente2:"cogumelos"},
    {id:"posta", nome:"Posta", imagem:Imagem_Posta, carne:"vaca", ingrediente1:"arroz", ingrediente2:"molho"},
    {id:"bifanas", nome:"Bifanas", imagem:Imagem_Bifana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"bife_peru", nome:"Bife de Peru", imagem:Imagem_Peru, carne:"peru", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"c_p_alentejana", nome:"Carne de Porco à Alentejana", imagem:Imagem_C_P_Alentejana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"coteletinhas", nome:"Costeletinhas", imagem:Imagem_Costeletinhas, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"carbonara", nome:"Carbonara", imagem:Imagem_Carbonara, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"massa_cotovelinho", nome:"Massa do Cotovelinho", imagem:Imagem_Massa_Cotovelinho, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"vitela_estufada", nome:"Vitela Estufada", imagem:Imagem_Vitela_Estufada, carne:"vaca", ingrediente1:"pao", ingrediente2:"massa"},
    {id:"peito_frango", nome:"Peito de Frango", imagem:Imagem_Peito_Frango, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"}];

//Mostra informação inicial a explicar o que fazer em cada página
export function MostraInformacao(num){
    //console.log(num);
    //console.log(document.querySelector(".informacao"));
    if(num===1){
            console.log("está a ir bem");
            console.log(document.querySelector(".informacao"));
            document.querySelector(".informacao").style.translate = "0px 100px";
            document.querySelector(".informacao").style.opacity = "1";
            document.querySelector(".informacao").style.transition = "translate 0.8s, opacity 0.8s";
            document.querySelector(".informacao").style.zIndex="1";
    }else if (num===2){
            console.log(document.querySelector(".informacao_opcoes_pratos").style.display);
            document.querySelector(".informacao_opcoes_pratos").style.translate = "0px -100px";
            document.querySelector(".informacao_opcoes_pratos").style.display = "block";
            document.querySelector(".informacao_opcoes_pratos").style.opacity = "1";
            document.querySelector(".informacao_opcoes_pratos").style.transition = "translate 0.8s, opacity 0.8s";
            document.querySelector(".informacao_opcoes_pratos").style.zIndex="1";
    }else if(num===3){
            document.querySelector(".cobre_escolha").style.zIndex = "0";
    }
}

//Retira a informação inicial acerca de cada página
export function TiraInformacao(num){
    console.log(document.querySelector(".informacao"));
    if(num===1){
            document.querySelector(".informacao").style.display="none";
    }else if (num===2){
            document.querySelector(".informacao_opcoes_pratos").style.display="none";
    }else if (num===3){
            document.querySelector(".cobre_escolha").style.zIndex="-1";
            document.querySelector(".popup_opcoes").style.display="none";
    }
    
}

var pratoEscolhidoNome;
export const PratoEscolhido = (event) => {
    
        pratoEscolhidoNome = event.target.alt;
        console.log(pratoEscolhidoNome);
        return(pratoEscolhidoNome);
}



/*
export function EscolhaPratos(event){
    for (let i=0; i<lista_pratos.length; i++){
        console.log(PratoEscolhido(event));
        console.log(event.target.className);
        if (event.target.alt===PratoEscolhido(event)){
        console.log(event.target.alt);
        console.log(lista_pratos[i].nome);
        console.log(document.querySelectorAll(".prato_1")[i]);
        document.querySelectorAll(".prato_1")[i].style.display="none";
        if(event.target.className!==lista_pratos[i].nome){
            //console.log(lista_pratos[i].nome);
            if(event.target.className!==lista_pratos[i].carne){
                    console.log(document.querySelectorAll(".prato_1")[i]);
                    //console.log("entrou");
                    document.querySelectorAll(".prato_1")[i].style.display="block";
            }
        }
    }
}
}
*/

//Escolha dos pratos sugeridos, de acordo com o prato da refeição anterior
export function EscolhaPratos(event){
    for (let i=0; i<lista_pratos1.length; i++){
        console.log(event.target.className);
        console.log(event.target.alt);
        console.log(lista_pratos[i].nome);
        console.log(lista_pratos[i].carne);
        console.log(lista_pratos1[i]);
        if(event.target.alt===lista_pratos1[i].nome || event.target.className===lista_pratos1[i].carne){
            //console.log(lista_pratos[i].nome);
            console.log(lista_pratos1[i]);
            console.log("Entrou, ta bom");
            lista_pratos1.splice(i,1);
            console.log(lista_pratos);
            console.log(lista_pratos1);
            //console.log("entrou");
            i--;
            console.log(i);
        }
    }

    document.querySelector(".popup_opcoes").style.display="flex";
    console.log(lista_pratos);
    console.log(lista_pratos1);
    return(event.target.className);
}


//Cópia da lista de pratos original para trabalhar na página partos opções
//e mostrar apenas os pratos adequados
export function Lista_toda(event){
    if (event.target.className=="link_navegar" || event.target.className=="paraTras"){
        lista_pratos1=[{id:"massa_bolonhesa", nome:"Massa Bolonhesa", imagem:Imagem_Massa_Bolonhesa, carne:"vaca", ingrediente1: "massa", ingrediente2:"queijo"},
            {id:"francesinha", nome:"Francesinha", imagem:Imagem_Francesinha, carne:"vaca", ingrediente1:"pao", ingrediente2:"molho"},
            {id:"frango_assado", nome:"Frango Assado", imagem:Imagem_Frango_Assado, carne:"frango", ingrediente1:"massa", ingrediente2:"molho"},
            {id:"strogonof", nome:"Strogonoff", imagem:Imagem_Strogonoff, carne:"peru", ingrediente1:"arroz", ingrediente2:"natas"},
            {id:"bife", nome:"Bife", imagem:Imagem_Bife,  carne:"vaca", ingrediente1:"batatas", ingrediente2:"cogumelos"},
            {id:"posta", nome:"Posta", imagem:Imagem_Posta, carne:"vaca", ingrediente1:"arroz", ingrediente2:"molho"},
            {id:"bifanas", nome:"Bifanas", imagem:Imagem_Bifana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"bife_peru", nome:"Bife de Peru", imagem:Imagem_Peru, carne:"peru", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"c_p_alentejana", nome:"Carne de Porco à Alentejana", imagem:Imagem_C_P_Alentejana, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"coteletinhas", nome:"Costeletinhas", imagem:Imagem_Costeletinhas, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"carbonara", nome:"Carbonara", imagem:Imagem_Carbonara, carne:"porco", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"massa_cotovelinho", nome:"Massa do Cotovelinho", imagem:Imagem_Massa_Cotovelinho, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"vitela_estufada", nome:"Vitela Estufada", imagem:Imagem_Vitela_Estufada, carne:"vaca", ingrediente1:"pao", ingrediente2:"massa"},
            {id:"peito_frango", nome:"Peito de Frango", imagem:Imagem_Peito_Frango, carne:"frango", ingrediente1:"pao", ingrediente2:"massa"}];;
        console.log(lista_pratos1);
        console.log(lista_pratos);
    }
}

//Mostrar as informações, no caso, passos e ingredientes dos pratos
export function Receita(event){
    for(let j=0; j<lista_pratos.length; j++){
        console.log(event.target.alt);
        console.log(lista_pratos[j].nome);
        console.log(lista_receitas[j].receita);
        if(event.target.alt===lista_pratos[j].nome){
            console.log("entrou boa");
            document.querySelector(".receita_texto").innerHTML=lista_receitas[j].receita;
            document.querySelector(".ingredientes").innerHTML=lista_receitas[j].ingredientes;
            document.querySelector(".imagem_receita").style.backgroundImage=`url(${lista_pratos[j].imagem})`;
            document.querySelector(".imagem_receita").style.backgroundRepeat="no-repeat";
            document.querySelector(".imagem_receita").style.backgroundSize="100% 80%";
            document.querySelector(".popup_receita").style.display="block";
           
        }else if(event.target.className==="botao_fechar"){
            document.querySelector(".popup_receita").style.display="none";
        }
    }
    
}




//Armazenar evento para utilizar na função de adicionar pratos à lista
export var variavel_pratos_anteriores;

export function Valor_Pratos_Anteriores(event){
        variavel_pratos_anteriores = event.target.value;
        console.log(variavel_pratos_anteriores);
        return(variavel_pratos_anteriores);
}

let lista_pratos_anteriores = [];
let botao_tirar_prato;
let lista_dias_semana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
let dia_semana;
var estilo={
    cor:"",
    opcao:[]
};

//Dá as opções de apenas verificar os pratos sugeridos e de gerar a lista de pratos anteriores e vai adicionando as informações dos mesmos à lista
export function ListaPratosAnteriores(event){
        let h = new Date();
        for (let g=0; g<lista_dias_semana.length; g++){
            if(g==h.getDay()){                
                dia_semana=lista_dias_semana[g];
            }
        }
        console.log(h);
        console.log("está a dar");
        //console.log(variavel_pratos_anteriores);
        //console.log(document.querySelector(".anteriores_lista"));
        //console.log(valor_pratos);

        function renderElementos(lista_pratos_anteriores){
            document.querySelector(".anteriores_lista").innerHTML="";

            lista_pratos_anteriores.forEach(function(elemento){
                const elementoLista = document.createElement('li');
                elementoLista.setAttribute("class", "elemento");
                elementoLista.setAttribute("chave", elemento.id);
                elementoLista.innerHTML = `<div class="caixa_elemento">
                    <div class="informacao_elemento">
                        <div class="imagem_elemento">
                            <img src="${elemento.imagem}" alt="Imagem do ${elemento.nome}"></img>
                        </div>
                        <div class="informacao_prato">
                            <p>${elemento.nome}</p>
                            <p>Proteina: ${elemento.proteina}</p>
                            <div class="informacao_condimentos">
                                <span class="botao_opcoes Arroz_branco" id="${elemento.id}">Arroz branco</span>
                                <span class="botao_opcoes Arroz_ervilhas" id="${elemento.id}">Arroz ervilhas</span>
                                <span class="botao_opcoes Massa_esparguete" id="${elemento.id}">Massa esparguete</span>
                                <span class="botao_opcoes Massa_cotovelinho" id="${elemento.id}">Massa cotovelinho</span>
                                <span class="botao_opcoes Massa_cortada" id="${elemento.id}">Massa cortada</span>
                                <span class="botao_opcoes Massa_cores" id="${elemento.id}">Massa cores</span>
                                <span class="botao_opcoes Batata_frita" id="${elemento.id}">Batata frita</span>
                                <span class="botao_opcoes Batata_assada" id="${elemento.id}">Batata assada</span>
                                <span class="botao_opcoes Batata_cozida" id="${elemento.id}">Batata cozida</span>
                            </div>
                        </div>
                        <div class="informacao_adicional">
                        <p>${elemento.data_e_hora}</p>
                        <i class = "fa" id = "${elemento.id}">&#xf1f8</i>
                        </div>
                    </div>
                    </div>`
                document.querySelector(".anteriores_lista").appendChild(elementoLista);
                //botao_tirar_prato = elemento.id;
                //console.log(botao_tirar_prato);
            });
            
            console.log(document.querySelectorAll("i"));
                    document.querySelectorAll("i").forEach(item =>{
                    console.log(item);
                    item.addEventListener('click', function(event){
                        console.log("o botao funciona");
                        console.log(event.target.id);
                        removerdoLocalStorage(event.target.id);
                    })})

            let escolha_condimentos = document.querySelectorAll(".botao_opcoes");
            
            //console.log(escolha_condimentos);
                    escolha_condimentos.forEach(item =>{
                        //console.log(item);
                        item.addEventListener("click", function(event){
                            let lista_para_mudar = localStorage.getItem('lista_pratos_anteriores');
                            lista_pratos_anteriores=JSON.parse(lista_para_mudar);
                            console.log(event.target);
                            for(let t=0; t<lista_pratos_anteriores.length; t++){
                                if(event.target.id==lista_pratos_anteriores[t].id){
                                    console.log(t);

                                    if(!lista_pratos_anteriores[t].estilo_botoes){
                                        estilo.cor="";
                                        estilo.opcao=[];
                                        lista_pratos_anteriores[t].estilo_botoes=estilo;
                                    }

                                    estilo=lista_pratos_anteriores[t].estilo_botoes;

                                    if(event.target.style.backgroundColor!="green"){
                                        console.log(estilo.opcao.indexOf(event.target.className, 0));
                                        estilo.cor="green";
                                        estilo.opcao.push(event.target.className);
                                        event.target.style.backgroundColor="green";
                                
                                    }else if(event.target.style.backgroundColor=="green"){
                                        estilo.cor="grey";
                                        console.log(estilo.opcao.indexOf(event.target.className));
                                        estilo.opcao.splice(estilo.opcao.indexOf(event.target.className), 1);
                                        event.target.style.backgroundColor="grey";
                                    }
                            
                                    lista_pratos_anteriores[t].estilo_botoes = estilo;
                                    console.log(lista_pratos_anteriores[t].estilo_botoes.opcao);
                                }
                            };
                            localStorage.setItem('lista_pratos_anteriores', JSON.stringify(lista_pratos_anteriores));
                            //renderElementos(lista_pratos_anteriores);
                            //console.log(event.target.style.backgroundColor);
                            console.log(event.target.className);
                        });
                    })
        };

        function aplicaEstilo(event){
            obterdaLocalStorage();
            //console.log(lista_pratos_anteriores[0].estilo_botoes.opcao);
            console.log(lista_pratos_anteriores);
            //console.log(document.getElementsByClassName(lista_pratos_anteriores[0].estilo_botoes.opcao));
            for (let j=0; j<lista_pratos_anteriores.length; j++){
                if(lista_pratos_anteriores[j].hasOwnProperty('estilo_botoes')==true){
                //console.log(document.getElementsByClassName(lista_pratos_anteriores[j].estilo_botoes.opcao)[0])
                    for(let v=0; v<lista_pratos_anteriores[j].estilo_botoes.opcao.length; v++){
                        console.log(lista_pratos_anteriores[j].estilo_botoes.opcao);
                        console.log(lista_pratos_anteriores[j].estilo_botoes.opcao.length);
                        console.log(document.getElementsByClassName(lista_pratos_anteriores[j].estilo_botoes.opcao[v])[0]);
                        console.log(v);
                        document.getElementsByClassName(lista_pratos_anteriores[j].estilo_botoes.opcao[v])[j].style.backgroundColor="green";
                    };
                }
            }
        }
            
        function adicionaraoLocalStorage(lista_pratos_anteriores){
            localStorage.setItem('lista_pratos_anteriores', JSON.stringify(lista_pratos_anteriores));
            renderElementos(lista_pratos_anteriores);
            aplicaEstilo(event);
        };

        function obterdaLocalStorage(){
            const referencia = localStorage.getItem('lista_pratos_anteriores');
            if (referencia){
                lista_pratos_anteriores = JSON.parse(referencia);
                renderElementos(lista_pratos_anteriores);
            };
        };

        function removerdoLocalStorage(id){
            lista_pratos_anteriores = lista_pratos_anteriores.filter(function(elemento){
                console.log(elemento.id);
                return elemento.id != id;
            });
            
            adicionaraoLocalStorage(lista_pratos_anteriores);
            
        }

        //Função de escolha de condimentos
        /*
        function EscolherCondimentos(event){
            console.log(getComputedStyle(event.target));
            if(event.style.backgroundColor=="grey"){
                return(event.style.backgroundColor="green")
            }else{
                return(event.style.backgroundColor="grey")
            }
        }*/
        
        //console.log(document.getElementById(elemento.id));


        for(let m=0; m<lista_pratos.length; m++){
            if (pratoEscolhidoNome==lista_pratos[m].nome){
                console.log("entrou sim");
                //localStorage.setItem("elemento_lista", document.createElement("LI") )
                function adicionarElemento(elemento){
                    const elemento_lista = {
                        id: h.getMilliseconds(),
                        imagem: lista_pratos[m].imagem,
                        data_e_hora: h.getDate()+"/"+h.getMonth()+"/"+h.getFullYear()+" "+dia_semana,
                        nome: elemento,
                        proteina: lista_pratos[m].carne,
                        condimento1: lista_pratos[m].ingrediente1,
                        condimento2: lista_pratos[m].ingrediente2
                    };
                    
                    lista_pratos_anteriores.push(elemento_lista);
                    adicionaraoLocalStorage(lista_pratos_anteriores);
                };
                
                obterdaLocalStorage();
                adicionarElemento(lista_pratos[m].nome);
                pratoEscolhidoNome="";
                aplicaEstilo(event);
                
            }else if (event.target.className === "link_navegar"){
                console.log("esta a ir na pagina");
                obterdaLocalStorage();
                aplicaEstilo(event);
                /*console.log(document.querySelectorAll("li"));
                console.log(document.querySelector(".anteriores_lista"));
                    document.querySelectorAll("li").forEach(item =>{
                    console.log(item);
                    item.addEventListener('click', function(event){
                        console.log("o botao funciona");
                        if(event.target.tagName==botao_tirar_prato){
                            console.log("esta fixe");
                            removerdoLocalStorage(event.target.id, event.target.num);
                            v=event.target.num;
                        }
                        })})*/
                break;
            }
        }
        
        
        console.log(pratoEscolhidoNome);
        
};





/*
export function EscolhaPratos(){
    for (let i=0; i<lista_pratos.length; i++){
        console.log()
        console.log(event.target.alt);
        console.log(lista_pratos[i].nome);
        document.querySelectorAll(".prato_1")[i].style.display="none";
        if(event.target.alt!==lista_pratos[i].nome){
            //console.log(lista_pratos[i].nome);
            if(event.target.className!==lista_pratos[i].carne){
                    console.log(document.querySelectorAll(".prato_1")[i]);
                    //console.log("entrou");
                    document.querySelectorAll(".prato_1")[i].style.display="block";
            }
    }
}
}*/