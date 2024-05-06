export interface IProject {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export interface IProjectsSection {
  title: string;
  projects: IProject[];
}
