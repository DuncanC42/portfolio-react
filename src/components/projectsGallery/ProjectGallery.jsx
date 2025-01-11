import {Container} from "../container/Container.jsx";
import {ProjectCard} from "./ProjectCard.jsx";
import './ProjectGallery.css';
import {Chip, Stack} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import {School, Terminal, Work} from "@mui/icons-material";

function handleDelete() {
    console.log('You clicked the delete icon.');
}

export const ProjectGallery = () => {
    return (
        <Container id="projectContainer" title="Mes Projets">
            <div className="projectsFilter">
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="School"
                        onClick={handleDelete}
                        icon={<School/>}
                    />
                    <Chip
                        label="Personnal"
                        onClick={handleDelete}
                        icon={<Terminal/>}
                    />
                    <Chip
                        label="Entreprise"
                        onClick={handleDelete}
                        icon={<Work/>}
                    />
                </Stack>
            </div>

            <div className="ProjectGallery">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
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