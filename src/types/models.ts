/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Project {
  name: string;
  github: string;
  app: string;
  profileId: number;
  id: number;
  picture?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Profile {
  name: string;
  picture?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  projects: Project[]
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
