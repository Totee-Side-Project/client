export type Gender = "male" | "female";

export interface ReqSignIn {
  email: string;
  password: string;
}

export interface ReqSignUp extends ReqSignIn {
  username: string;
  major: string;
  phone: string;
  studentId: string;
  gender: Gender;
}

export interface UserState {
  id: string;
  email: string;
  username: string;
  token: string;
  // gender: keyof typeof Gender;
  // major: string;
  // studentId: string;
}

export interface ResponseData<T> {
  header: {
    code: number;
    message: string;
  };
  body: {
    data: T;
  };
}
