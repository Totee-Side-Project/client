enum Gender {
  male = "male",
  female = "female",
}

export interface ReqSignIn {
  email: string;
  password: string;
}

export interface ReqSignUp extends ReqSignIn {
  username: string;
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
    token: T;
  };
}
