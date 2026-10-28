import type { Resume } from './types';

// French draft by Claude from en.ts (2026-10-17, updated 2026-10-26), for JP's review. Quebec typography: non-breaking space before colons and %.
const resume: Resume = {
  "intro": {
    "title": "Gestionnaire de livraison et de mandats",
    "organization": "EY",
    "location": "Victoria (C.-B.)",
    "summary": "J’aide des équipes du secteur public à bâtir des services numériques qui servent bien les gens qui les utilisent. Je rassemble clients, designers et développeurs autour d’un plan commun, je garde le travail honnête quant au budget et aux risques, et j’adapte notre façon de travailler aux personnes de chaque programme. J’ai commencé en assurance qualité et en ingénierie, alors je suis aussi à l’aise en revue de sprint que devant la haute direction."
  },
  "about": "En dehors du travail, on me trouve souvent au jardin, en train de bâtir de petits outils pour la maison ou de faire des collages. J’aime les projets qui partent d’un problème que j’ai vraiment, et c’est sur ce site que certains d’entre eux aboutissent.",
  "experience": [
    {
      "title": "Gestionnaire",
      "organization": "EY",
      "location": "Victoria (C.-B.)",
      "start": "2022-07",
      "summary": "J’aide les clients du secteur public et les équipes d’EY à transformer des programmes complexes en services sur lesquels les gens peuvent compter, avec des plans clairs, des équipes en santé et des chiffres honnêtes.",
      "bullets": [
        "Bâtir des façons de travailler communes : cocréer la prise de décision des programmes et rencontrer régulièrement les dirigeants des clients pour garder le travail sur la bonne voie",
        "Guider les équipes dans les principes, les rôles et les pratiques agiles pour qu’elles livrent comme une seule équipe très performante : coaching des équipes, des responsables de produit et de la haute direction, du lancement à l’acceptation finale",
        "Aider les dirigeants à voir ce qui change et pourquoi : séances d’information à la direction sur les changements au modèle opérationnel et les priorités de la prochaine phase",
        "Aider les responsables de produit à se concentrer sur l’essentiel : cadrage et séquençage du MVP, et arbitrage entre nouvelles fonctionnalités, défauts et dette technique",
        "Transformer la découverte en une voie claire vers l’avant : analyses d’écart, carnets de produit et feuilles de route pluriannuelles pour la prochaine phase d’un programme",
        "Transformer les besoins des clients en plans fiables, en tenant compte de leur budget et de leurs contraintes contractuelles : cadrage, établissement des prix et prévisions qui gardent les programmes de longue durée financés et sur la bonne voie",
        "Garder la livraison visible et en mouvement : rapports et suivi de l’avancement pour plusieurs équipes agiles, et mobilisation des bonnes personnes quand le travail se bloque"
      ]
    },
    {
      "title": "Scrum Master",
      "organization": "Freshworks Studio",
      "location": "Victoria (C.-B.)",
      "start": "2017-12",
      "end": "2022-06",
      "summary": "Scrum Master à temps plein au sein d’équipes produit.",
      "bullets": [
        "Animation des cérémonies agiles et des carnets de produit pour que l’équipe partage une même vision des priorités et des engagements de sprint",
        "Coaching des membres de l’équipe sur les rôles et les pratiques de Scrum, et levée des obstacles qui les freinaient",
        "Début en assurance qualité, avec des tests d’applications mobiles et Web et des conseils aux développeurs sur les correctifs et sur l’interface et l’expérience utilisateur"
      ]
    }
  ],
  "earlier": [
    {
      "title": "Stagiaire coop, tests système et automatisation",
      "organization": "Avigilon",
      "location": "Grand Vancouver (C.-B.)",
      "start": "2016-01",
      "end": "2016-12"
    },
    {
      "title": "Stagiaire coop, technologue en génie électrique",
      "organization": "Garde côtière canadienne",
      "location": "Victoria (C.-B.)",
      "start": "2014-01",
      "end": "2014-03"
    },
    {
      "title": "Technologue en génie électrique",
      "organization": "ECOFIT Networks Inc.",
      "location": "Victoria (C.-B.)",
      "start": "2013-04",
      "end": "2013-09"
    }
  ],
  "skills": [
    {
      "group": "Personnes et équipes",
      "tags": [
        "Coaching agile",
        "Santé des équipes",
        "Animation",
        "Partenariat avec les parties prenantes",
        "Communication avec la direction"
      ]
    },
    {
      "group": "Livraison",
      "tags": [
        "Gouvernance de programme",
        "Dépendances et risques",
        "Feuilles de route",
        "Gestion du carnet de produit",
        "Cadrage MVP"
      ]
    },
    {
      "group": "Planification et finances",
      "tags": [
        "Cadrage et établissement des prix",
        "Prévisions budgétaires",
        "Contrats et énoncés de travail",
        "Gestion des fournisseurs"
      ]
    },
    {
      "group": "Méthodes et outils",
      "tags": [
        "Scrum",
        "SAFe",
        "Azure DevOps",
        "Jira",
        "Confluence",
        "Miro",
        "Mural",
        "FigJam",
        "Microsoft 365",
        "Copilot",
        "Adobe Experience Manager"
      ]
    }
  ],
  "education": [
    {
      "title": "Baccalauréat en génie informatique",
      "organization": "Université de Victoria",
      "location": "Victoria (C.-B.)",
      "start": "2015",
      "end": "2017",
      "note": "Projet de fin d’études : compteur d’eau GreenFlow, de mai à juillet 2017"
    },
    {
      "title": "Diplôme de technologue en électronique",
      "organization": "Collège Camosun",
      "location": "Victoria (C.-B.)",
      "start": "2011",
      "end": "2014"
    },
    {
      "title": "Certificat de technicien en réseautique et en électronique",
      "organization": "Collège Camosun",
      "location": "Victoria (C.-B.)",
      "start": "2010",
      "end": "2011"
    }
  ],
  "certifications": [
    {
      "title": "Certified Scrum Master",
      "issuer": "Scrum Alliance"
    },
    {
      "title": "Advanced Certified Scrum Master",
      "issuer": "Scrum Alliance"
    },
    {
      "title": "SAFe 6 Agilist",
      "issuer": "Scaled Agile"
    },
    {
      "title": "AI for ScrumMasters"
    }
  ]
};

export default resume;
