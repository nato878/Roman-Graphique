import {Link} from "react-router-dom"
import "./Header.css"
export  default function Header(){
    return(
        <>
        <header >
            <div id="head">
            <img src="eyes1.jpg" className="logo" alt="eyes" />
            <span>République de Galaad</span>
            </div>
            <nav className="nav-button">
                <Link to= "/" >
                <button  className="nav-item" id="accuel">Accueil</button>
                </Link>
                <Link to= "/Defred">
                <button className="nav-item" id="defred">Defred</button>
                </Link>
                <button className="nav-item">Moira</button>
            </nav>
        </header>
        </>
    )
}