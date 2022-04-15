import api from '../lib/api';
import { Posts, ResponseData, ReqPostDataType, Category } from '../types';

export default class PostService {
  public static async getPosts(
    page: number = 1,
    category: Category
  ): Promise<ResponseData<Posts>> {
    let response: any;

    if (category === '전체') {
      response = await api.get(`api/v1/post/list?pageNumber=${page}`);
    } else {
      response = await api.get(
        `api/v1/post/list/${category}?pageNumber=${page}`
      );
    }
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
