export interface ReqSignIn {
  email: string;
  password: string;
}

export interface ReqSignUp extends ReqSignIn {
  username: string;
  major: string;
  phone: string;
  studentId: string;
  gender: string;
}

export interface UserState extends ReqSignUp {
  id: string;
  token: string;
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
