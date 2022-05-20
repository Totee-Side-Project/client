import { AxiosResponse } from 'axios';
import api from '../lib/api';
import { Posts, ResponseData, ReqPostDataType, Category, Post } from '../types';

export default class PostService {
  public static async getPosts(
    pageParam: number = 0,
    category: Category
  ): Promise<ResponseData<Posts>> {
    let response: AxiosResponse;

    if (category === '전체') {
      response = await api.get(`api/v1/post/list?page=${pageParam}`);
    } else {
      response = await api.get(
        `api/v1/post/list/${category}?page=${pageParam}`
      );
    }

    return response.data;
  }

  public static async getPost(postId: number): Promise<ResponseData<Post>> {
    const response = await api.get(`api/v1/post/${postId}`);
    return response.data;
  }

  public static async addPost(
    postData: ReqPostDataType
  ): Promise<ResponseData<void>> {
    const response = await api.post('api/v1/post', postData);
    return response.data;
  }
}
