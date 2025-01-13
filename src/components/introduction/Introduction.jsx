import {Button, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Container} from "../container/Container.jsx";

import './Introduction.css';

import duncanImage from '../../assets/IMG_20241110_214015.jpg';

const birthDate = new Date(2004, 4, 24);

// Fonction pour calculer l'âge
const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Si nous n'avons pas encore atteint le mois d'anniversaire
    // ou si nous sommes dans le mois d'anniversaire mais n'avons pas encore atteint le jour
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

const age = calculateAge(birthDate);

export const Introduction = () => {
    return (
        <Container containerId="about">
            <div className="intro">
                <div className="introPicture">
                    <img src={duncanImage} alt="Description"/>
                </div>

                <span className="introText">
                    <h1>
                        Duncan Cadoret
                    </h1>
                    <h2>
                        Étudiant en développement logiciel
                    </h2>
                    <p>
                        Etudiant de {age} ans <strong>fasciné</strong> par l'informatique
                        depuis mon enfance. J'ai aujourd'hui conscience
                        de par ma <strong>passion</strong> croissante vouloir en faire
                        mon <strong>métier</strong> notamment dans le <strong>développement
                        logiciel et applicatif</strong>.
                        En dehors de l'informatique je pratique le judo depuis
                        mes 6 ans, c'est le sport qui m'a permis de grandir
                        et d'évoluer tout en développant les valeurs qui me
                        sont propres.
                        <p>Allez donc voir
                                <Button variant="contained" href="#">Mon CV</Button>
                        </p>
                    </p>
                </span>
            </div>
        </Container>
    );
}