import api from '../lib/api';
import { Posts, ResponseData } from '../types';

export default class PostService {
  public static async getPosts(page: number = 1): Promise<ResponseData<Posts>> {
    const response = await api.get(`api/v1/post/list?pageNumber=${page}`);
    return response.data;
  }
}
