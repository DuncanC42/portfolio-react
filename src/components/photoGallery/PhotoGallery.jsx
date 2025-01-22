import {Container} from "../container/Container.jsx";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import * as React from "react";
import {auto} from "@popperjs/core";

import './PhotoGallery.css';

import egliseLutherienne from './1737462155853.jpg';
import paysageMontagneSoleil from './IMG_20240820_183102.jpg';
import paysageAutricheHauteur from './IMG_20240711_120930.jpg';
import paysageLac from './IMG_20240821_192934.jpg';
import paysageMontagneBrouillard from './IMG_20240822_132201.jpg';
import arbreAutriche from './IMG_20240823_142037.jpg';
import chapelleAutriche from './IMG_20240823_142725.jpg';
import tourneseol from './IMG_20240823_142947.jpg';
import canardInvasion from './IMG_20241007_083310.jpg';
import plageCoucheSoleil from './IMG_20241204_084524.jpg';
import plageCoucheSoleil2 from './IMG_20241204_084608.jpg';
import plageVague from './IMG_20250117_102010.jpg';
import petiteCabane from './IMG_20250117_104608.jpg';
import maisonLoin from './IMG_20250117_104624.jpg';


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const PhotoGallery = () => {
    return (
            <div className="galleryContainer">
                <h2 className="font-bold mb-4">Photos</h2>
                <div>
                    <h3>Ces clichés sont des moments de connexion pure où le temps s'arrête, où l'esprit et l'objectif
                        s'alignent dans une contemplation partagée. Chaque photo est une pause méditative, un dialogue
                        silencieux avec l'instant présent.</h3>
                    <div className="imageListContainer">
                        <ImageList
                            sx={{width: "500px", height: "500px"}}
                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                        >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>

                </div>

            </div>
    );
}

const itemData = [
    {
        img: egliseLutherienne,
        title: 'Eglise Lutherienne',
        rows: 2,
        cols: 2,
    },
    {
        img: paysageMontagneSoleil,
        title: 'Paysage Montagne Soleil',
        rows: 2,
        cols: 2,
    },
    {
        img: chapelleAutriche,
        title: 'Chapelle Autriche',
        cols: 2,
        rows: 2,
    },
    {
        img: arbreAutriche,
        title: 'Arbre Autriche',
        rows: 2,
        cols: 2,
    },

    {
        img: tourneseol,
        title: 'Tournesol',
        rows: 2,
        cols: 2,
    },
    {
        img: canardInvasion,
        title: 'Canard Invasion',
        rows: 2,
        cols: 2,
    },
    {
        img: plageVague,
        title: 'Plage Vague',
        cols: 2,
        rows: 2,
    },
    {
        img: plageCoucheSoleil,
        title: 'Plage Coucher de Soleil',
        cols: 2,
    },
    {
        img: plageCoucheSoleil2,
        title: 'Plage Coucher de Soleil 2',
        cols: 2,
    },

    {
        img: paysageMontagneBrouillard,
        title: 'Paysage Montagne Brouillard',
        cols: 4,
        rows: 2,
    },
    {
        img: paysageLac,
        title: 'Paysage Lac',
        cols: 3,
        rows: 3,
    },
    {
        img: paysageAutricheHauteur,
        title: 'Paysage Autriche Hauteur',
    },
    {
        img: petiteCabane,
        title: 'Petite Cabane',
    },
    {
        img: maisonLoin,
        title: 'Maison Loin',
    },

];