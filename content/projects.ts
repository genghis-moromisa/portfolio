import projectsData from './projects.json';

export type Project = {
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  link?: string;
};

export const projects = projectsData.projects as Project[];
