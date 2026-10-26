import type { Resume } from './types';

// From JP's résumé CSV (updated 2026-10-26). French version in fr.ts.
const resume: Resume = {
  "intro": {
    "title": "Delivery and Engagement Manager",
    "organization": "EY",
    "location": "Victoria, BC",
    "summary": "I help public sector teams build digital services that work for the people who use them. I bring clients, designers and developers together around a shared plan, keep the work honest about budget and risk, and adapt how we work to the people on each program. I started in QA and engineering, so I'm as comfortable in a sprint review as in a room with executives."
  },
  "about": "Outside work I'm usually in the garden, building small tools for my own household, or making collages. I like projects that start as a problem I actually have, and this site is where some of them end up.",
  "experience": [
    {
      "title": "Manager",
      "organization": "EY",
      "location": "Victoria, BC",
      "start": "2022-07",
      "summary": "Help public sector clients and EY teams turn complex programs into services people can rely on, with clear plans, healthy teams and honest numbers.",
      "bullets": [
        "Build shared ways of working: co-designing how programs make decisions and meeting regularly with client leaders to keep the work on course",
        "Guide teams through Agile principles, roles and practices so they deliver as one high-performing team: coaching teams, Product Owners and executives from kickoff to final acceptance",
        "Help leaders see what's changing and why: executive briefings on operating-model changes and next-phase priorities",
        "Help Product Owners focus on what matters most: shaping MVP scope and sequencing, and balancing new features against defects and technical debt",
        "Turn discovery into a clear path forward: gap analyses, backlogs and multi-year roadmaps for a program's next phase",
        "Turn client needs into plans they can trust, accounting for their budget and contractual constraints: scoping, pricing and forecasting that keep long-running programs funded and on track",
        "Keep delivery visible and moving: reporting and progress tracking across several Agile teams, and bringing in the right people when work gets stuck"
      ]
    },
    {
      "title": "Scrum Master",
      "organization": "Freshworks Studio",
      "location": "Victoria, BC",
      "start": "2017-12",
      "end": "2022-06",
      "summary": "Began as a QA analyst and moved into a full-time Scrum Master role on product teams.",
      "bullets": [
        "Facilitated Agile ceremonies and backlogs so the team shared one view of priorities and sprint commitments",
        "Coached team members on Scrum roles and practices and cleared what was blocking them",
        "Started in QA, testing mobile and web applications and guiding developers on fixes and UI/UX changes"
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
      "group": "People and teams",
      "tags": [
        "Agile coaching",
        "Team health",
        "Facilitation",
        "Stakeholder partnership",
        "Executive communication"
      ]
    },
    {
      "group": "Delivery",
      "tags": [
        "Program governance",
        "Dependencies and risk",
        "Roadmaps",
        "Backlog management",
        "MVP scoping"
      ]
    },
    {
      "group": "Planning and finance",
      "tags": [
        "Scoping and pricing",
        "Budget forecasting",
        "Contracts and SOWs",
        "Vendor management"
      ]
    },
    {
      "group": "Methods and tools",
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
