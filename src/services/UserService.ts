import api from '../lib/api';
import {
  ReqNickName,
  ReqSignIn,
  ReqSignUp,
  ResponseData,
  ResponseToken,
  UserState,
} from '../types';

export default class UserService {
  public static async signIn(reqData: ReqSignIn): Promise<ResponseToken> {
    const response = await api.post('/auth/login', reqData);
    return response.data;
  }

  public static async nickName(reqData: ReqNickName) {
    const response = await api.post(`/api/v1/validation/nickname`, reqData);
    return response.data;
  }

  public static async signUp(
    reqData: ReqSignUp
  ): Promise<ResponseData<{ message: string }>> {
    const response = await api.post('/auth/signup', reqData);
    return response.data;
  }

  public static async check(token: string): Promise<ResponseData<UserState>> {
    const response = await api.get('/api/v1/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
