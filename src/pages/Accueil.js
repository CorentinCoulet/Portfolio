import { MotionConfig } from "framer-motion";
import "../styles/Accueil.css";

import { motion } from "framer-motion";

function Accueil(){
    return (

   <article className="grid">  

    <h1 className="propos">A PROPOS DE MOI</h1>

    <p className="descriptif">
        Du haut de mes 20 ans, je m'appelle Corentin Coulet et je suis 
        un grand fan du Web et des technologies en lien avec la VR. 
        Suite à différents stages au collège/lycée dans des domaines 
        variés (droit, réparation informatique, programmation etc)
        j'ai pu apprendre énormément de choses et voir des points de vue
        sur des sujets plus où moins éloignés les uns des autres. 
        
    </p>

    <a href="CV.pdf" target="_blank">Mon CV</a>

    </article>
    );
}

export default Accueil;