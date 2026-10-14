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
                <img src="Accueil.jpeg" alt="accueil" onClick={() => naviguer("Defred")} />
            </div>
            <div className="bloc_B">
                <h1>Vivre sous la lumière </h1>
                <img src="images.jpg" alt="Moira" onClick={() => naviguer("Moira")} />
            </div>
            
    
        </div>
        
            <div class="escalier">
                <div class="marche m0"><div class="noir"></div><div class="blanc"></div></div>
                <div class="marche m1"><div class="noir"></div><div class="blanc"></div></div>
                <div class="marche m2"><div class="noir"></div><div class="blanc"></div></div>
                <div class="marche m3"><div class="noir"></div><div class="blanc"></div></div>
                <div class="marche m4"><div class="noir"></div><div class="blanc"></div></div>
            </div>
    </div>
    </>
    )
}