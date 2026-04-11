export interface ILoginForm {
  login: string;
  password: string;
}

export interface ILoginSuccessResponse {
  data: ILoginForm;
}

export interface IRegistrationForm extends ILoginForm {
  confirmPassword: string;
  name: string;
  email: string;
}

export interface IRegistrationSuccessResponse {
  data: IRegistrationForm;
}

export interface IUser {
  login: string;
  name: string;
  email: string;
}

export interface IUserResponse {
  access_token: string;
  user: IUser;
}

export interface IUserSuccessResponse {
  data: IUserResponse;
}
