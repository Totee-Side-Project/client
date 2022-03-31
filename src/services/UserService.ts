import axios from "axios";
import { ReqSignIn, ReqSignUp, ResponseData, UserState } from "../types";

const BASE_URL = `http://totee-web-backend.us-west-2.elasticbeanstalk.com`;

export default class UserService {
  public static async signIn(
    reqData: ReqSignIn
  ): Promise<ResponseData<UserState>> {
    const response = await axios.post(`${BASE_URL}/auth/signin`, reqData);
    return response.data;
  }

  public static async signUp(
    reqData: ReqSignUp
  ): Promise<ResponseData<{ message: string }>> {
    const response = await axios.post(`${BASE_URL}/auth/signup`, reqData);
    return response.data;
  }

  public static async check(token: string): Promise<ResponseData<UserState>> {
    const response = await axios.get(`${BASE_URL}/api/v1/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
