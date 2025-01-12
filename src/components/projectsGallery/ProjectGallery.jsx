import React, { useState } from 'react';
import { Container } from "../container/Container.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import './ProjectGallery.css';
import { Chip, Stack } from "@mui/material";
import { School, Terminal, Work } from "@mui/icons-material";
import {projects} from './projects.js';

export const ProjectGallery = () => {
    const [selectedChip, setSelectedChip] = useState(null);

    const handleChipClick = (chip) => {
        setSelectedChip(chip === selectedChip ? null : chip);
    };

    const filteredProjects = selectedChip
        ? projects.filter(project => project.projectType === selectedChip)
        : projects;

    return (
        <Container containerId="projectContainer" title="Mes Projets">
            <div className="projectsFilter">
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="School"
                        onClick={() => handleChipClick('school')}
                        icon={<School />}
                        variant='outlined'
                        sx={{
                            fontSize: '1rem',
                            height: '40px',
                            padding: '0 10px',
                            backgroundColor: selectedChip === 'school' ? 'lightblue' : 'white',
                            color: selectedChip === 'school' ? 'white' : 'black'
                        }}
                    />
                    <Chip
                        label="Personal"
                        onClick={() => handleChipClick('personal')}
                        icon={<Terminal />}
                        variant='outlined'
                        sx={{
                            fontSize: '1rem',
                            height: '40px',
                            padding: '0 10px',
                            backgroundColor: selectedChip === 'personal' ? 'lightblue' : 'white',
                            color: selectedChip === 'personal' ? 'white' : 'black'
                        }}
                    />
                    <Chip
                        label="Entreprise"
                        onClick={() => handleChipClick('professional')}
                        icon={<Work />}
                        variant='outlined'
                        sx={{
                            fontSize: '1rem',
                            height: '40px',
                            padding: '0 10px',
                            backgroundColor: selectedChip === 'professional' ? 'lightblue' : 'white',
                            color: selectedChip === 'professional' ? 'white' : 'black'
                        }}
                    />
                </Stack>
            </div>

            <div className="ProjectGallery">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Container>
    );
};
