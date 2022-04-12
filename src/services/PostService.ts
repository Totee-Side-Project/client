import api from '../lib/api';
import { Posts, ResponseData, ReqPostDataType } from '../types';

export default class PostService {
  public static async getPosts(page: number = 1): Promise<ResponseData<Posts>> {
    const response = await api.get(`api/v1/post/list?pageNumber=${page}`);
    return response.data;
  }

  public static async addPost(
    postData: ReqPostDataType
  ): Promise<ResponseData<void>> {
    const response = await api.post('api/v1/post', postData);
    return response.data;
  }
}
