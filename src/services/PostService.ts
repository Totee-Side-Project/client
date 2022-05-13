import { AxiosResponse } from 'axios';
import api from '../lib/api';
import { Posts, ResponseData, ReqPostDataType, Category, GetDataType } from '../types';

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
      postData: GetDataType,
  ): Promise<ResponseData<Posts>> {
    const response = await api.get(
        `api/v1/post`
    );
    return response.data;
  }

  public static async addPost(
    postData: ReqPostDataType
  ): Promise<ResponseData<void>> {
    const response = await api.post('api/v1/post', postData);
    return response.data;
  }

  // public static getPostData = async (getData: GetDataType) => {
  //     return await axios.get(`${BASE_URL}/api/v1/post/3`, {
  //             headers: {
  //                 Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  //             }
  //         }
  //     );
  // }
}
