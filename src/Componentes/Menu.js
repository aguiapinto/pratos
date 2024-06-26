import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Menu.css';
import { EscolhaPratos, Lista_toda, ListaPratosAnteriores } from "./script";

const Menu = () => {
    return(
    <>
        <nav className="Menu-Navegar">
            <div className="Menu_opcoes">
                <Link className="link_navegar" to="/" onClick={event => Lista_toda(event)}>Página inicial</Link>
                <Link className="link_navegar" to="/Opcoes_pratos">Opções de Pratos</Link>
                <Link className="link_navegar" to="/Pratos_Anteriores" onClick={event => {setTimeout(() => {ListaPratosAnteriores(event);}, 2000)}}>Pratos Anteriores</Link>
            </div>
        </nav>
    </>
    );
};

export default Menu;