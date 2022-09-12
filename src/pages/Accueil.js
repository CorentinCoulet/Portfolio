import { MotionConfig } from "framer-motion";
import "../styles/Accueil.css";
import Coco from "../assets/moi3.jpg"
import JPO from "../assets/journeePorteOuverte.jpg"
import PP1 from "../assets/pingPong1.jpg"
import PP2 from "../assets/pingPong2.jpg"

import { motion } from "framer-motion";

function Accueil(){
    return (
   <>
    <div className="infoMoi">
        <div className="lesBords">
            <h1 className="propos">A PROPOS DE MOI</h1>
            <p className="descriptif">
                Du haut de mes 20 ans, je suis un grand fan du Web et des technologies en lien avec la VR. 
                Suite à différents stages au collège/lycée dans des domaines 
                variés (droit, réparation informatique, programmation etc)
                j'ai pu apprendre énormément de choses et voir des points de vue
                sur des sujets plus où moins éloignés les uns des autres.
            </p>
            <div className="cv">
                <a href="CV.pdf" target="_blank" className="texteCV">Mon CV</a>  
            </div>
        </div>
        
        <img className="moi" src={Coco} alt="ma photo"/>
        
    </div>

    <div className="lesBords">
        <h1 className="passion">MES PASSIONS</h1>
        <p className="passions">
            J'aime beaucoup les jeux vidéos, principalement MOBA et MMORPG, je suis plutôt ouvert à 
            tous les genres et j'aime en découvrir des nouveaux. Grand passionné du sport et plus particulièrement 
            du ping pong et de la musculation, après quelques compétitions j'ai un peu arrêté le tennis de table mais
            je continue encore la musculation à ce jour et je ne suis pas prêt d'arrêter. La programmation étant un 
            point important de ma vie, je fais souvent de petits codes ou prépare des projets personnels pour continuer
            à m'entraîner. Pendant mon temps libre, j'aime également passer du temps avec mes amis et lire des mangas.
        </p>
    </div>

    <div className="imagesPP">
        <img id="pp1" src={PP1} alt="photo ping pong"/>
        <img id="po" src={JPO} alt="journée portes ouvertes"/>
        <img id="pp2" src={PP2} alt="photo ping pong"/>
    </div>
   </>
    );
}

export default Accueil;