import {Container} from "../container/Container.jsx";
import {ProjectCard} from "./ProjectCard.jsx";
import './ProjectGallery.css';
export const ProjectGallery = () => {
    return (
        <Container id="projectContainer" title="Mes Projets">
            <div className="ProjectGallery">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>

        </Container>
    );
}