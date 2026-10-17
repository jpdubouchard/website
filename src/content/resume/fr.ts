import type { Resume } from './types';

// French draft by Claude from en.ts (2026-10-17), for JP's review. Quebec typography: non-breaking space before colons and %.
const resume: Resume = {
  "intro": {
    "title": "Gestionnaire de livraison et de mandats",
    "organization": "EY",
    "location": "Victoria (C.-B.)",
    "summary": "Je suis un leader en livraison qui assure la gouvernance de programmes et garde sur la bonne voie des programmes complexes du secteur public valant plusieurs millions de dollars. J’allie la livraison agile au partenariat produit et au coaching, et j’adapte les façons de travailler aux personnes de chaque programme, avec une attention particulière à la santé des équipes. J’ai commencé en assurance qualité et en ingénierie, alors je suis aussi à l’aise avec les développeurs et les designers qu’avec la haute direction."
  },
  "about": "En dehors du travail, on me trouve souvent au jardin, en train de bâtir de petits outils pour la maison ou de faire des collages. J’aime les projets qui partent d’un problème que j’ai vraiment, et c’est sur ce site que certains d’entre eux aboutissent.",
  "experience": [
    {
      "title": "Gestionnaire",
      "organization": "EY",
      "location": "Victoria (C.-B.)",
      "start": "2022-07",
      "summary": "Dirige la livraison de projets de transformation numérique pour des clients du gouvernement provincial et pour une plateforme de marque mondiale.",
      "bullets": [
        "Gestion du cycle commercial des mandats : définition de la portée, établissement des prix, approbations, prévisions et facturation",
        "Direction d’un programme provincial de permis miniers jusqu’à une prolongation de 12 mois, grâce à l’analyse de rentabilisation, à l’établissement des prix, au plan de dotation et à l’évaluation des risques",
        "Regroupement des marques régionales des studios d’EY en un seul site mondial sur Adobe Experience Manager, lancé en juin 2025 sans aucune constatation de sécurité de niveau élevé ou moyen",
        "Livraison de la version 2.0 d’un système provincial de financement des services de garde pour plus de 200 utilisateurs, à 2 % près du budget",
        "Mise en place des contrats, des énoncés de travail et de la conformité en matière d’assurance pour cinq mandats provinciaux simultanés, ainsi que d’un modèle d’énoncé de travail réutilisable"
      ]
    },
    {
      "title": "Scrum Master et analyste en assurance qualité",
      "organization": "Freshworks Studio",
      "location": "Victoria (C.-B.)",
      "start": "2017-12",
      "end": "2022-06",
      "summary": "Passage d’analyste en assurance qualité à Scrum Master au sein d’équipes produit.",
      "bullets": [
        "Tests exploratoires et fonctionnels d’applications mobiles et Web",
        "Rétroaction et conseils aux développeurs sur les correctifs et les changements d’interface et d’expérience utilisateur",
        "Animation des cérémonies agiles et mise à jour des carnets de produit et des outils de livraison, pour que l’équipe partage une même vision des priorités et des engagements de sprint",
        "Levée des obstacles et des risques de livraison, en intervenant directement ou en faisant appel aux bonnes personnes pour tenir les engagements",
        "Coaching des membres de l’équipe sur les rôles, les pratiques et les principes de Scrum, pour renforcer l’appropriation par l’équipe"
      ]
    },
    {
      "title": "Stagiaire coop, tests système et automatisation",
      "organization": "Avigilon",
      "location": "Grand Vancouver (C.-B.)",
      "start": "2016-01",
      "end": "2016-12",
      "bullets": [
        "Tests exploratoires et fonctionnels de logiciels d’entreprise",
        "Conception de cas de test pour l’exécution manuelle et automatisée"
      ]
    },
    {
      "title": "Stagiaire coop, technologue en génie électrique",
      "organization": "Garde côtière canadienne",
      "location": "Victoria (C.-B.)",
      "start": "2014-01",
      "end": "2014-03",
      "bullets": [
        "Essai et réparation d’équipement de navigation",
        "Essais opérationnels d’équipement en mer",
        "Installation de mises à niveau de systèmes à bord d’embarcations pneumatiques"
      ]
    },
    {
      "title": "Technologue en génie électrique",
      "organization": "ECOFIT Networks Inc.",
      "location": "Victoria (C.-B.)",
      "start": "2013-04",
      "end": "2013-09",
      "bullets": [
        "Programmation, assemblage et essai de systèmes ECOFIT complets",
        "Définition et mise en œuvre de procédures normalisées pour l’assemblage, les essais et l’expédition",
        "Gestion des commandes et de l’expédition internationales de pièces, ainsi que de l’inventaire de l’entrepôt",
        "Soutien à la clientèle par téléphone et par courriel"
      ]
    }
  ],
  "skills": [
    {
      "group": "Gestion de programme",
      "tags": [
        "Gouvernance de programme",
        "Gestion des dépendances",
        "Prévisions budgétaires",
        "Contrôles financiers",
        "Contrats et énoncés de travail",
        "Communication avec la direction"
      ]
    },
    {
      "group": "Livraison agile",
      "tags": [
        "Scrum",
        "Indicateurs de livraison",
        "Gestion des risques et des obstacles",
        "Gouvernance du carnet de produit",
        "Cérémonies agiles"
      ]
    },
    {
      "group": "Responsabilité produit",
      "tags": [
        "Feuilles de route",
        "Collecte des exigences",
        "Récits utilisateurs",
        "Priorisation",
        "Cadrage MVP et MUP"
      ]
    },
    {
      "group": "Coaching agile",
      "tags": [
        "Coaching d’équipe",
        "Coaching de la direction",
        "Communauté des Scrum Masters",
        "Santé des équipes"
      ]
    },
    {
      "group": "Outils",
      "tags": [
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
