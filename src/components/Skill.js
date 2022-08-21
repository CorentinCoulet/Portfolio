import "../styles/Skill.css"

function Skill({nom,maitrise,image}){
    return <div className="skill">
        <img src={image} alt=""/>
        <div>
            <p>{nom}</p>
            <div>
                <p>Niveau de maitrise</p>
                <div>
                    <span className={maitrise >= 1 ? "active":""}></span>
                    <span className={maitrise >= 2 ? "active":""}></span>
                    <span className={maitrise >= 3 ? "active":""}></span>
                    <span className={maitrise >= 4 ? "active":""}></span>
                </div>
            </div>
        </div>
    </div>
}   

export default Skill;