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

  public static async signUp(reqData: ReqSignUp) {
    const response = await axios.post(`${BASE_URL}/auth/signup`, reqData);
    console.log(response);
  }
}
