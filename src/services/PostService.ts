import axios, { AxiosResponse } from 'axios';
import api from '../lib/api';
import { Posts, ResponseData, ReqPostDataType, Category, Post, ReqComment, Comment } from '../types';

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

  public static async addComment(
    postData: ReqComment
  ): Promise<ResponseData<void>> {
    const response = await api.post('api/v1/comment',postData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    );
    return response.data;
  }

  public static async getComment(postId:string): Promise<ResponseData<Comment>> {
    const response = await api.get(`api/v1/comment/${postId}`);
    return response.data;
  }
}
