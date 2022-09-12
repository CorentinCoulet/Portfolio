import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Parcours() {
    return (
    
        <VerticalTimeline animate={true}>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021-2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
        <h3 className="vertical-timeline-element-title">La Nuit de L'Info</h3>
        <h4 className="vertical-timeline-element-subtitle">Montpellier, Occitanie</h4>
        <p>
        Le plus fun serious-game regroupant des milliers d’étudiants pour développer un site web en une nuit 
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021-2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        
        >
        <h3 className="vertical-timeline-element-title">1ère année de BUT Informatique</h3>
        <h4 className="vertical-timeline-element-subtitle">Montpellier, Occitanie</h4>
        <p>
            Découverte de l'informatique et de ses différents domaines.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2020-2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        
        >
        <h3 className="vertical-timeline-element-title">Groupement Universitaire Numérique</h3>
        <h4 className="vertical-timeline-element-subtitle">Montpellier, Paul-Valéry</h4>
        <p>
            Association qui récupère des ordinateurs et autres appareils informatique auprès d'entreprises (notamment le crous) et les répare pour les redistribuer aux étudiants dans le besoin.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2020-2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        
        >
        <h3 className="vertical-timeline-element-title">DU AccES</h3>
        <h4 className="vertical-timeline-element-subtitle">Montpellier, Occitanie</h4>
        <p>
            Remise à niveau dans toutes les matières scientifiques et technologiques.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2018-2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        
        >
        <h3 className="vertical-timeline-element-title">Bac STI2D spé SIN mention Assez Bien</h3>
        <h4 className="vertical-timeline-element-subtitle">Montferrier, Saint Joseph Pierre Rouge</h4>
        <p>
            Sciences et Technologies de L'Industrie et du Développement Durable
        </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        

        )
    
    
    
    
    {/*<article>
        <p>
        bac STI2D (Sciences et Technologies de l'Industrie et du Développement Durable) 
        option SIN (Système d'Information et Numérique). 2018-2020
        </p>
        <p>3 mois GEII -> DU AccES. 2020-2021</p>
        <p>1ère année BUT Info. 2021-2022</p>
        <p>Participation à la nuit de l'info</p>
    </article>*/}
}

export default Parcours;