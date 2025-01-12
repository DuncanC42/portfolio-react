import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Container } from "../container/Container.jsx";

import './Introduction.css';

import duncanImage from '../../assets/IMG_20241110_214015.jpg';

export const Introduction = () => {
    return (
        <Container containerId="about">
            <Grid container spacing={2} alignItems="center">
                <Grid size={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={duncanImage} alt="Description" style={{ width: '35%' }} />
                </Grid>
                <Grid size={6} style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                    <Typography variant="h1" component="h1">
                        Duncan Cadoret
                    </Typography>
                    <Typography variant="h3" component="h3">
                        Étudiant en développement logiciel
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}