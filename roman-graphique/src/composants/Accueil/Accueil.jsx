import "./Accueil.css"
import { useNavigate } from "react-router-dom" 
export default function Accueil(){
    const naviguer = useNavigate()
    return(
    <>
    <div className="page">
        <div className="contenu">
            <div className="bloc_A">
                <h1>Vivre sous oppression </h1>
                <h2>Defred</h2>
                <img src="Accueil.jpeg" alt="accueil" onClick={() => naviguer("/Defred")} />
            </div>
            <div className="bloc_B">
                <h1>Vivre sous la lumière </h1>
                <h2>Moira</h2>
                <img src="images.jpg" alt="Moira" onClick={() => naviguer("/Moira")} />
            </div>
            
    
        </div>
        
            <div className="escalier">
                <div className="marche m0"><div className="noir"></div><div className="blanc"></div></div>
                <div className="marche m1"><div className="noir"></div><div className="blanc"></div></div>
                <div className="marche m2"><div className="noir"></div><div className="blanc"></div></div>
                <div className="marche m3"><div className="noir"></div><div className="blanc"></div></div>
                <div className="marche m4"><div className="noir"></div><div className="blanc"></div></div>
            </div>
    </div>
    </>
    )
}