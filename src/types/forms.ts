/* ---------==== custom forms ====--------- */

export interface CreateProjectFormData{
  name: string,
  github: string,
  picture: string,
  app: string
}

export interface UpdateProjectFormData{
  name: string,
  github: string,
  picture: string,
  app: string,
}


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}

