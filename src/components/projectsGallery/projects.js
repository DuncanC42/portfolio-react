import puissance4Image from '../../assets/projectDefaultImage.jpg';
import chevalBlanc from '../../assets/logoChevalBlanc.jpg';
import breizhIle from '../../assets/breizhIle.png';
import protfolioImage from '../../assets/portfolio.png';
import directChatImage from '../../assets/directChat.png';
import arch from '../../assets/archmc2.png';

import swagger from '../../assets/swagger.png';

export const projects = [
    {
        image: puissance4Image,
        title: "Puissance 4",
        description: "Créer un jeu de puissance 4 dans un terminal. Puis ensuite réaliser le meilleur algorithme possible pour jouer contre nous.",
        languages: ["C"],
        projectType: "school",
        tooltipContent: [
            "AC 11.01 : Implémenter des conceptions simples",
            "AC 11.03 : Faire des essais et évaluer leurs résultats en regard des spécifications",
            "AC 12.01 : Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
            "AC 12.02 : Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)",
            "Compétence 2: Optimiser des applications informatiques."
        ],
        buttonLink: "https://github.com/DuncanC42/Puissance_4"
    },
    {
        image: chevalBlanc,
        title: "Logiciel Cheval blanc",
        description: "Développer un logiciel de gestion pour un hôtel fictif.",
        languages: ["Java", "JavaFX"],
        projectType: "school",
        tooltipContent: [
            "AC 11.01 : Implémenter une application à partir de spécifications simples.\n",
            "AC 11.02 : Concevoir une application (à l'aide d'UML) à partir de spécifications simples.\n",
            "AC 11.03 : Evaluer une application (par rapport aux spécifications) par des tests.\n",
            "AC 11.04 : Réaliser des interfaces (IHM) utilisateurs.\n",
            "Compétence 6 : Travailler dans une équipe informatique."

        ],
        buttonLink: "https://github.com/DuncanC42/logicielChevalBlanc"
    },
    {
        image: breizhIle,
        title: "Site location Breizh Ile",
        description: "Breizh Ile est un site web permettant de reserver et mettre en location des logements en Bretagne. Il dispose d'une partie front et back office",
        languages: ["Php", "Scss", "Js", "C", "Docker"],
        projectType: "school",
        tooltipContent: [
            "Compétence 1 : Réaliser un développement d'application - Création de l'application web complète\n",
            "Compétence 4 : Gérer des données de l'information - Gestion des données utilisateurs et réservations\n",
            "Compétence 5 : Conduire un projet - Application de la méthodologie Agile\n",
            "Compétence 6 : Travailler dans une équipe informatique - Collaboration efficace au sein de l'équipe\n",
        ],
        buttonLink: "https://github.com/Alex041718/Breizh-ile/tree/develop"
    },
    {
        image: protfolioImage,
        title: "Mon portfolio",
        description: "Réalisations de mon portfolio en React",
        languages: ["JS", "React", "Css"],
        projectType: "personal",
        tooltipContent: ["Tooltip for project 2"],
        buttonLink: "https://github.com/DuncanC42/portfolio-react"
    },
    {
        image: swagger,
        title: "D-Shop Api",
        description: "Implémentation d'un backend pour un site e-commerce fictif",
        languages: ["Java", "Spring", "Hibernate"],
        projectType: "personal",
        tooltipContent: ["Tooltip for project 1"],
        buttonLink: "https://github.com/DuncanC42/d-shop-api/tree/master"
    },
    {
        image: directChatImage,
        title: "Direct Chat",
        description: "Direct chat est une simple application pour comprendre le principe des websockets",
        languages: ["Java", "Spring", "Websocket", "Html", "Css"],
        projectType: "personal",
        tooltipContent: ["Tooltip for project 2"],
        buttonLink: "https://github.com/DuncanC42/directChat"
    },
    {
        image: swagger,
        title: "Maestro Api",
        description: "Api de gestion des données pour le jeu Maestro",
        languages: ["Java", "Spring", "Spring Data Jpa", "Hibernate"],
        projectType: "personal",
        tooltipContent: ["En cours de développement"],
        buttonLink: "https://github.com/DuncanC42/maestro-api"
    },
    {
        title: "Maestro",
        description: "Interface du jeu Maestro où l'on doit deviner qui à choisit quelle musique dans un groupe de joueurs",
        languages: ["JS", "React", "Css"],
        projectType: "personal",
        tooltipContent: ["En cours de développement"],
        buttonLink: "https://github.com/DuncanC42/maestro-react"
    },
    {
        title: "NaturaLinked",
        description: "Réseaux social pour organiser des évènements de nettoyage de la nature",
        languages: ["Spring", "JDBC", "Dart", "Flutter", "Microservices"],
        projectType: "personal",
        tooltipContent: ["En cours de développement"],
        buttonLink: "https://github.com/DuncanC42/NaturaLinkedApi/tree/master"
    },
    {
        image: arch,
        title: "Solis - France Travail",
        description: "Développement d'écrans pour l'accompagnement des bénéficaires du RSA au sein du logiciel Solis",
        languages: ["JS", "Bootstrap", "Spring", "JDBC"],
        projectType: "professional",
        tooltipContent: ["En cours de développement","Compétence 3 :Administrer des systèmes informatiques communicants complexes.\n",
        "Compétence 4 : Gérer des données de l'information."
        ],
    }
]