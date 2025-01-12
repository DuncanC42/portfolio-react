import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Container} from "../container/Container.jsx";

import './Introduction.css';

import duncanImage from '../../assets/IMG_20241110_214015.jpg';

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
                        Etudiant de 19 ans <strong>fasciné</strong> par l'informatique
                        depuis mon enfance. J'ai aujourd'hui conscience
                        de par mon <strong>passion</strong> croissante vouloir en faire
                        mon <strong>métier</strong> notamment dans le <strong>développement
                        logiciel et applicatif</strong>.
                        En dehors de l'informatique je pratique le judo depuis
                        mes 6 ans, c'est le sport qui m'a permis de grandir
                        et d'évoluer tout en développant les valeurs qui me
                        sont propres.<br/>Allez donc voir
                        <a href="Data/Cadoret_Duncan_CV_rouge.pdf" target="_blank">
                            <button>Mon CV</button>
                        </a>
                    </p>
                </span>
            </div>
        </Container>
    );
}