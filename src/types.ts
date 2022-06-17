export interface ReqSignIn {
  id: string;
  password: string;
}

export interface ReqInfo {
  nickname: string;
  grade: string;
  major: string;
  univercity: string;
}

export interface ReqNickName {
  nickname: string;
}

export interface ReqSignUp extends ReqSignIn {
  email: string;
  nickname: string;
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

export type Category = '전체' | '스터디' | '멘토멘티' | '프로젝트' |
'동아리' | 'LAB' | '자유게시판';

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
  nickname: string;
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
export interface ModalStateType {
  type: 'signIn' | 'signUp' | 'addInfo';
  isOpen: boolean;
  title: string;
  content: string;
  page: number;
}
