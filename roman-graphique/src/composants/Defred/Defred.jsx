import "./Defred.css";



export default function Defred(){
    return(
        
        <section>
        <h1>Vivre sous l'oppression</h1>
        <div className="container">
            <div className="section" id="masquer">
                <img src= "masquer_Emotions.jpeg" alt="emotion" />
                <div className="text" >
                    <h2>Le masquage des émotions et la perte d'identité</h2>
                    <p>
                        Defred ne peut pas toujours montrer ce qu’elle ressent réellement. 
                        Elle doit constamment faire attention à son comportement, à ses paroles et à ses expressions lorsqu’elle s’adresse à quelqu’un. 
                        La République de Galaad a détruit une grande partie de son identité et de sa liberté. Elle est devenue la propriété d’un homme 
                        et s’est vu attribuer un nouveau nom.
                        Bref, Defred masque ses émotions et se voit imposer une nouvelle identité afin de se protéger et de survivre sous le régime de Galaad.
                    </p>
                </div>
            </div>
            <div className="section reverse" id="esclavage">
                <img src= "esclavage_sexuel.jpeg" alt="sexuel" />
                <div className="text">
                    <h2>L’esclavage sexuel</h2>
                    <p>
                        Defred est assignée à un Commandant en raison de sa capacité à avoir des enfants. 
                        Elle est soumise à des rapports sexuels ritualisés et non consentis, organisés par le 
                        régime dans le but de provoquer une grossesse. Le corps de Defred est principalement considéré comme un moyen de procréer. 
                        Elle ne peut pas décider librement de son avenir reproductif.
                        Bref, Defred est réduite à un instrument de reproduction au service du régime.
                    </p>
                </div>
            </div>
            <div className="section" id="obeïssance">
                <img src= "Obeissance.jpeg" alt="Obeïssance" />
                <div className="text">
                    <h2>L’obéïssance</h2>
                    <p>
                       Defred doit obéir aux règles imposées par le Commandant.
                        Elle se soumet principalement par peur des sanctions et pour survivre dans la
                        société de Galaad. Cette obéissance limite sa liberté et l’empêche de vivre selon
                        ses propres choix. Toutefois, obéir ne signifie pas qu’elle accepte les règles du
                        régime. Elle cherche à protéger sa vie tout en conservant ses pensées et
                        ses opinions personnelles. Bref, Son obéissance constitue alors un moyen de survie dans un système 
                        où la désobéissance peut entraîner de graves conséquences.
                    </p>
                </div>
            </div>
            
        </div>
        </section>
        
    )
}