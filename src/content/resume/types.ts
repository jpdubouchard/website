/** Résumé content, one file per language. The homepage and (from step 4) the PDFs read from here. */
export interface Role {
  title: string;
  organization: string;
  location: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or omitted for a current role */
  end?: string;
  summary?: string;
  bullets: string[];
}

export interface Education {
  title: string;
  organization: string;
  location: string;
  /** YYYY */
  start: string;
  /** YYYY */
  end: string;
  note?: string;
}

export interface Resume {
  intro: { title: string; organization: string; location: string; summary: string };
  about: string;
  experience: Role[];
  skills: { group: string; tags: string[] }[];
  education: Education[];
  certifications: { title: string; issuer?: string }[];
}
