import "../styles/Competences.css";
import Skill from "../components/Skill.js";
import HtmlCss from "../assets/htmlCss.png";
import Js from "../assets/javascript.png";
import React from "../assets/react.png";
import Php from "../assets/php.png";
import Symfony from "../assets/symfony.png";
import Sql from "../assets/sql.png";
import Git from "../assets/git.png";
import Java from "../assets/java.png";
import JavaFx from "../assets/javaFx.png";
import C from "../assets/c.png";
import Linux from "../assets/linux.png";
import Cplus from "../assets/C++.png";
import Csharp from "../assets/C#.png";
import Figma from "../assets/figma.png";
import Notion from "../assets/notion.png";

function Competences() {
    return <>

    <div className="comp">
        <p>Langages et frameworks</p>
        <div className="langFrame">
            <Skill image={HtmlCss} nom={"HTML et CSS"} maitrise={4}/>
            <Skill image={Js} nom={"Javascript"} maitrise={4}/>
            <Skill image={React} nom={"React"} maitrise={3}/>
            <Skill image={Php} nom={"Php"} maitrise={3}/>
            <Skill image={Symfony} nom={"Symfony"} maitrise={1}/>
            <Skill image={Sql} nom={"Sql"} maitrise={4}/>
            <Skill image={Java} nom={"Java"} maitrise={4}/>
            <Skill image={JavaFx} nom={"JavaFx"} maitrise={3}/>
            <Skill image={C} nom={"C"} maitrise={3}/>
            <Skill image={Cplus} nom={"C++"} maitrise={3}/>
            <Skill image={Csharp} nom={"C#"} maitrise={3}/>
        </div>
    </div>

    <div className="comp">
        <p>Software</p>
        <div className="software">
            <Skill image={Git} nom={"Git"} maitrise={3}/>
            <Skill image={Linux} nom={"Linux"} maitrise={3}/>
            <Skill image={Figma} nom={"Figma"} maitrise={2}/>
            <Skill image={Notion} nom={"Notion"} maitrise={3}/>
        </div>
    </div>  
    </>
}

export default Competences;
