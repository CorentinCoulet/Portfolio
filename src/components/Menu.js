import { Link } from "react-router-dom";
import "../styles/Menu.css";
import BURGER from "../assets/burger.svg";
import {useState} from "react";
import CROIX from "../assets/croix.svg";

function Menu() {
  const [active, setActive] = useState(false);
  return <header>
    <ul className="menu">
      <li>
          <Link to={"/"}>Accueil</Link>
      </li>
      <li>
          <Link to={"/parcours"}>Parcours</Link>
      </li>
      <li>
          <Link to={"/competences"}>Compétences</Link>
      </li>
      <li>
        <Link to={"/projet"}>Projets</Link>
      </li>
      <li>
          <Link to={"/contact"}>Contacts</Link>
      </li>
  </ul>

  <img id="logoBurger" src={BURGER} onClick={() => setActive(!active)}/>

  <div className={active ? "menu2 active" : "menu2"}>
  <img id="croix" src={CROIX} onClick={() => setActive(!active)}/>
      <ul className="burger">
        <li>
            <Link to={"/"} onClick={() => setActive(!active)}>Accueil</Link>
        </li>
        <li>
            <Link to={"/parcours"} onClick={() => setActive(!active)}>Parcours</Link>
        </li>
        <li>
            <Link to={"/competences"} onClick={() => setActive(!active)}>Compétences</Link>
        </li>
        <li>
          <Link to={"/projet"} onClick={() => setActive(!active)}>Projets</Link>
        </li>
        <li>
            <Link to={"/contact"} onClick={() => setActive(!active)}>Contacts</Link>
        </li>
    </ul>
  </div>
</header>
}

export default Menu;