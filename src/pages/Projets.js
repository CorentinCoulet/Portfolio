import "../styles/Projets.css";
import AventuriersDuRail from "../assets/aventuriersRailEurope.png";
import Gnu from "../assets/gnu.png";
import Scrabble from "../assets/scrabble.jpg";
import NuitInfo from "../assets/nuitInfo.jpg";
import Projet from "../components/Projet.js";

function Projets() {
  return <section>
      <div className="AdR">
         <Projet
          nom={"Les Aventuriers du Rail"}
          image={AventuriersDuRail}
          images={[AventuriersDuRail]}
          />
      </div>

      <div className="Scr">
          <Projet
          nom={"Scrabble"}
          image={Scrabble}
          images={[Scrabble]}
          />
      </div>

      <div className="GNU">
          <Projet
          nom={"Groupement Numérique Universitaire"}
          image={Gnu}
          images={[Gnu]}
          />
      </div>

      <div className="NdLI">
          <Projet
          nom={"La Nuit de L'Info"}
          image={NuitInfo}
          images={[NuitInfo]}
          />
      </div>

    </section>
}

export default Projets;