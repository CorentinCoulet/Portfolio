import "../styles/Projets.css";

import AventuriersDuRail from "../assets/aventuriersRailEurope.png";
import MapADR from "../assets/mapADR.jpg"
import CodeJavaFX from "../assets/javaFxADR.JPG"

import Gnu from "../assets/gnu.png";

import Scrabble from "../assets/scrabble.jpg";

import NuitInfo from "../assets/nuitInfo.jpg";
import GroupeNuitInfo from "../assets/nuitInfoGroupe.jpg"

import Projet from "../components/Projet.js";

import Portfolio from "../assets/portfolio.png";

function Projets() {
  return <section className="proj">
      <div className="AdR">
         <Projet
          nom={"Les Aventuriers du Rail"}
          image={AventuriersDuRail}
          images={[AventuriersDuRail, MapADR, CodeJavaFX]}
          ><p>
            Projet universitaire réalisé en 3 grosses parties : <br/><br/>
            - phase de code en Java pour la création de toutes les fonctions qu'on utilisera pour le jeu, <br/><br/>
            - phase de code en Java servant à la conception d'un graphe pour représenter les différents chemins présents dans le jeu, <br/><br/>
            - phase de code en JavaFX pour toute la partie design/front du projet. 
          </p>
          </Projet>
      </div>

      <div className="Scr">
          <Projet
          nom={"Scrabble"}
          image={Scrabble}
          images={[Scrabble]}
          ><p>
            Projet universitaire consistant à réaliser un Scrabble sur console avec toutes ses spécificités (système de points, liste des mots autorisés, places disponibles sur le plateau, actions autorisées etc).
            C'est le premier "gros" projet que j'ai pu réaliser lors de mon année universitaire et bien que cela fut compliqué (puisque nous commençions à peine à étudier le Java), ça m'a apporté de l'expérience et 
            une meilleure compréhension du langage et de ses possibilités.
          </p>
          </Projet>
      </div>

      <div className="GNU">
          <Projet
          nom={"Groupement Numérique Universitaire"}
          image={Gnu}
          images={[Gnu]}
          ><p>
            Association Universitaire que j'ai rejoint depuis maintenant 2 ans (depuis 2020) dans laquelle je m'occupais de réparer des ordinateurs, des tablettes, des écrans
            et d'autres appareils ainsi que de la formation des nouveaux volontaires. Nous récupérons de vieux appareils (principalement des ordinateurs) auprès d'entreprises et d'universités 
            (CROUS étant le principal donateur) dans le but de les réparer/remettre à jour pour les offrir à des étudiants dans le besoin.
          </p>
          </Projet>
          
      </div>

      <div className="NdLI">
          <Projet
          nom={"La Nuit de L'Info"}
          image={NuitInfo}
          images={[NuitInfo, GroupeNuitInfo]}
          ><p>
            La Nuit de l’Info est une compétition nationale qui réunit étudiants, enseignants et entreprises pour travailler ensemble sur le développement d’une application web.
            La Nuit se déroule tous les ans, du premier jeudi du mois de décembre, coucher du soleil, jusqu'au lever du soleil le lendemain matin.
            Les participants ont la durée d'une nuit pour proposer, implémenter et packager une application Web 2.0. <br/><br/>
            Cette compétition m'a permis de découvrir une passion pour le développement Web ainsi que le fonctionnement de chaqu'un au sein d'un groupe pour réaliser un projet dans un court délai.
          </p>
          </Projet>
      </div>

      <div className="Portfolio">
        <Projet
        nom={"Portfolio"}
        image={Portfolio}
        images={[Portfolio]}
        ><p>
            Projet personnel qui me tient à coeur. J'ai réalisé par moi-même (et avec quelques recherches au besoin) un site web avec React où j'ai retranscrit les différentes choses que j'ai pu
            faire au cours de ces dernières années. Bien que ça soit encore maigre, j'espère pouvoir le faire évoluer avec mes futures expériences et ainsi continuer à me développer dans ce domaine
            qui me passionne et ne cesse de grandir.
        </p>
        </Projet>
      </div>

    </section>
}

export default Projets;