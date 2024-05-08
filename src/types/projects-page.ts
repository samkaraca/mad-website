export interface IProject {
  image: string;
  title: string;
  author?: string;
  degree?: string;
  description: string;
  link?: string;
}

export interface IProjectsSection {
  title: string;
  projects: IProject[];
}
