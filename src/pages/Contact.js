import "../styles/Contact.css";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";

function Contact() {
    return <footer>
        <ul className="footer">
      <li>
          <a href="https://github.com/CorentinCoulet" className="github"><img src={github}/></a>
      </li>
      <li>
          <a href="https://www.instagram.com/coulet.corentin/" className="instagram"><img src={instagram}/></a>
      </li>
      <li>
          <a href="https://www.facebook.com/profile.php?id=100069162676793" className="facebook"><img src={facebook}/></a>
      </li>
      <li>
          <a href="https://www.linkedin.com/in/corentin-coulet-486a66201/" className="linkedin"><img src={linkedin}/></a>
      </li>
    
      <li>
          <a href="https://twitter.com/cocoCLT" className="twitter"><img src={twitter}/></a>
      </li>
      <li>
          <a href="mailto:coulet.corentin@gmail.com" className="gmail"><img src={gmail}/></a>
      </li>
      <li>
          <a href="tel:+33610984763" className="phone"><img src={phone}/></a>
      </li>
  </ul>
</footer>
}

export default Contact;