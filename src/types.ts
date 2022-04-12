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

export interface Post {
  category: null;
  content: string;
  created_at: string;
  id: number;
  intro: null;
  postId: number;
  status: boolean;
  title: string;
  user: { username: 'uu'; email: 'rulu1@naver.com' };
  view: number;
}

export interface Posts {
  content: Post[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: false;
  };
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: boolean;
  totalElements: boolean;
  totalPages: boolean;
}
