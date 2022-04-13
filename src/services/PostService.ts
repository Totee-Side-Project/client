import axios from "axios";
import {GetDataType, PostDataType} from '../types';

const BASE_URL = `https://api.totee.link`

export default class PostService {
    static TOKEN: string;

    constructor() {
        PostService.TOKEN = localStorage.getItem('access_token') as string;
    }

    public static postPostData = async (postData: PostDataType) => {
        return await axios.post(`${BASE_URL}/api/v1/post`, postData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        });
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
