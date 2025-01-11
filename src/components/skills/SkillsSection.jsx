import {Container} from "../container/Container.jsx";
import {SkillComponent} from "./SkillComponent.jsx";

import './SkillSection.css';

export const SkillsSection = () => {
    return (
        <Container title="Mes Compétences" >
            <div className="listeSkills">
                <Container title="Skill name" color="green" containerId="skillContainer">
                    <SkillComponent></SkillComponent>
                </Container>
                <Container title="Skill name" color="green"  containerId="skillContainer">
                    <SkillComponent></SkillComponent>
                </Container>
                <Container title="Skill name" color="green" containerId="skillContainer">
                    <SkillComponent></SkillComponent>
                </Container>
                <Container title="Skill name" color="green" containerId="skillContainer" >
                    <SkillComponent></SkillComponent>
                </Container>
                <Container title="Skill name" color="green" containerId="skillContainer">
                    <SkillComponent></SkillComponent>
                </Container>
            </div>


        </Container>
    );
}