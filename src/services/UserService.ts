import axios from "axios";
import { ReqSignIn, ReqSignUp, ResponseData, UserState } from "../types";
import { PostDataType } from "../types/postData";
import TokenService from "./TokenService";

const BASE_URL = `https://api.totee.link`

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

  public static async postPost(token : string) {
    const repose = await axios.post(`${BASE_URL}/api/v1/post`,{
      hearders:{
        Authorization: `Bearer ${token}`,
      },
    });
    return repose.data;
  }

  // public static async postPostData(
  //     postData: PostDataType,
  //     // token:string
  // ){
  //   const reponse = await axios.post(`${BASE_URL}/api/v1/post`, postData,{
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   });
  //   return reponse.data;
  // }

  static TOKEN :string;
  constructor() {
    UserService.TOKEN = localStorage.getItem('access_token') as string;
    // UserService.TOKEN = TokenService.get() as string;
  }

  public static postPostData = async (postData:PostDataType) => {
    return await axios.post(`${BASE_URL}/api/v1/post`,postData,{
      headers: {
        Authorization: `Bearer ${UserService.TOKEN}`,
      }
    });
  }

  
}
