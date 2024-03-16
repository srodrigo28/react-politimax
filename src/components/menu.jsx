import { Link } from "react-router-dom";
import "./menu.css";

export function Menu(){
    return(
        <>
            <nav class="sidemenu">
                <ul>
                    <li>
                        <span class="logo">Seb App</span>
                    </li>
                    <li><Link to="/gestores">Gestores</Link></li>
                    <li><Link to="/afiliados">Afiliados</Link></li>
                    <li><Link to="/">Usuários</Link></li>
                    <li class="logout">
                        <Link to="/">Sair</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


