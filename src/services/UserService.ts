import api from '../lib/api';
import { ReqSignIn, ReqSignUp, ResponseData, UserState } from '../types';

export default class UserService {
  public static async signIn(
    reqData: ReqSignIn
  ): Promise<ResponseData<UserState>> {
    const response = await api.post('/auth/signin', reqData);
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
