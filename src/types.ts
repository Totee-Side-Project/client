export interface ReqSignIn {
  id: string;
  password: string;
}

export interface ReqSignUp extends ReqSignIn {
  email: string;
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

export interface ResponseToken {
  header: {
    code: number;
    message: string;
  };
  body: {
    token: string;
  };
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

export interface ReqPostDataType {
  title: string;
  content: string;
  categoryName: string;
}

export interface GetDataType {
  title: string;
  content: string;
}

export type Category = '전체' | '스터디' | '멘토멘티';

export interface Post {
  categoryName: Category;
  commentCount: number;
  content: string;
  createdAt: string;
  likeCount: number;
  major: string;
  postId: number;
  status: 'Y' | 'N';
  title: string;
  username: string;
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
  size: number;
  totalElements: number;
  totalPages: number;
}
export interface ModalState {
  type: 'signIn' | 'signUp';
  isOpen: boolean;
  title: string;
  content: string;
  page: number;
}
