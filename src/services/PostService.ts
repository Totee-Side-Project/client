import axios, { AxiosResponse } from 'axios';
import api from '../lib/api';
import {
  Posts,
  ResponseData,
  ReqPostDataType,
  Category,
  GetDataType,
  Post,
} from '../types';

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

  public static async getPost(
    postData: GetDataType
  ): Promise<ResponseData<Posts>> {
    const response = await api.get(`api/v1/post`);
    return response.data;
  }

  public static async addPost(
    postData: ReqPostDataType | any
  ): Promise<ResponseData<void>> {
    const response = await api.post('api/v1/post', postData);
    return response.data;
  }

  public static deletePost = async (postData: GetDataType) => {
    return (
      await axios.delete(`api/v1/post`),
      {
        header: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    );
  };

  public static updatePost = async (
    postData: ReqPostDataType | any,
    id: string
  ): Promise<ResponseData<Post>> => {
    const response = await axios.put(
      `https://api.totee.link/api/v1/post/${id}`,
      postData
    );
    return response.data;
  };

  public static addPostData = async (getData: GetDataType) => {
    return await axios.post(`https://api.totee.link/api/v1/post`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  };
}
