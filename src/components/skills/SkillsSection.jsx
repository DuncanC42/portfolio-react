import {Container} from "../container/Container.jsx";
import {SkillComponent} from "./SkillComponent.jsx";

import './SkillSection.css';
import {skills} from './skills.js';


export const SkillsSection = () => {
    return (
        <Container title="Mes Compétences">
            <div className="listeSkills">

                {
                    skills.map((skill, index) => (
                        <Container title={skill.category} containerId="skillContainer" key={index}>
                            <div className="technosContainer" data-aos="fade-down">
                                {skill.technos.map((techno, skillIndex) => (
                                    <SkillComponent key={skillIndex} {...techno} />
                                ))}
                            </div>

                        </Container>
                    ))
                }

            </div>

        </Container>
    );
}