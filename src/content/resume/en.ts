import type { Resume } from './types';

// From JP's résumé CSV (2026-10-15). French version in fr.ts.
const resume: Resume = {
  "intro": {
    "title": "Delivery and Engagement Manager",
    "organization": "EY",
    "location": "Victoria, BC",
    "summary": "I'm a delivery leader who runs program-level governance and keeps complex, multi-million-dollar public sector programs on track. I pair Agile delivery with product partnership and coaching, and I adapt ways of working to the people on each program, with a focus on team health. I started in QA and engineering, so I'm comfortable with developers, designers and executives alike."
  },
  "about": "Outside work I'm usually in the garden, building small tools for my own household, or making collages. I like projects that start as a problem I actually have, and this site is where some of them end up.",
  "experience": [
    {
      "title": "Manager",
      "organization": "EY",
      "location": "Victoria, BC",
      "start": "2022-07",
      "summary": "Leads digital transformation delivery for provincial government clients and a global brand platform.",
      "bullets": [
        "Own the commercial lifecycle of engagements: scoping, pricing, approvals, forecasting and invoicing",
        "Led a provincial mining permitting program to a 12-month extension through the business case, pricing, staffing plan and risk assessment",
        "Consolidated EY's regional studio brands into one global site on Adobe Experience Manager, launched June 2025 with no high or medium security findings",
        "Shipped v2.0 of a provincial childcare funding system for 200+ users, finishing within 2% of budget",
        "Set up contracts, SOWs and insurance compliance across five concurrent provincial engagements, plus a reusable SOW template"
      ]
    },
    {
      "title": "Scrum Master and QA Analyst",
      "organization": "Freshworks Studio",
      "location": "Victoria, BC",
      "start": "2017-12",
      "end": "2022-06",
      "summary": "Moved from QA analyst to Scrum Master on product teams.",
      "bullets": [
        "Facilitated Agile ceremonies and kept backlogs and delivery tools current so the team shared one view of priorities and sprint commitments",
        "Cleared delivery impediments and risks, stepping in directly or bringing in the right people to keep commitments on track",
        "Coached team members on Scrum roles, practices and principles to build team ownership"
      ]
    }
  ],
  "earlier": [
    {
      "title": "System Test and Automation Co-op",
      "organization": "Avigilon",
      "location": "Greater Vancouver, BC",
      "start": "2016-01",
      "end": "2016-12"
    },
    {
      "title": "Electrical Technologist Co-op",
      "organization": "Canadian Coast Guard",
      "location": "Victoria, BC",
      "start": "2014-01",
      "end": "2014-03"
    },
    {
      "title": "Electrical Technologist",
      "organization": "ECOFIT Networks Inc.",
      "location": "Victoria, BC",
      "start": "2013-04",
      "end": "2013-09"
    }
  ],
  "skills": [
    {
      "group": "Program management",
      "tags": [
        "Program governance",
        "Dependency management",
        "Budget forecasting",
        "Financial controls",
        "Contracts and SOWs",
        "Executive communication"
      ]
    },
    {
      "group": "Agile delivery",
      "tags": [
        "Scrum",
        "Delivery metrics",
        "Risk and impediment management",
        "Backlog governance",
        "Agile ceremonies"
      ]
    },
    {
      "group": "Product ownership",
      "tags": [
        "Roadmaps",
        "Requirements gathering",
        "User stories",
        "Prioritization",
        "MVP and MUP scoping"
      ]
    },
    {
      "group": "Agile coaching",
      "tags": [
        "Team coaching",
        "Executive coaching",
        "Scrum Master community",
        "Team health"
      ]
    },
    {
      "group": "Tools",
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
      "title": "Bachelor of Computer Engineering",
      "organization": "University of Victoria",
      "location": "Victoria, BC",
      "start": "2015",
      "end": "2017",
      "note": "GreenFlow water meter (capstone), May to July 2017"
    },
    {
      "title": "Electronics Technologist Diploma",
      "organization": "Camosun College",
      "location": "Victoria, BC",
      "start": "2011",
      "end": "2014"
    },
    {
      "title": "Networking and Electronic Technician Certificate",
      "organization": "Camosun College",
      "location": "Victoria, BC",
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
