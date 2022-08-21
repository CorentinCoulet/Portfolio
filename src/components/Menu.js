import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
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
</header>
}

export default Menu;