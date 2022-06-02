import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../lib/api';
import PostService from '../../services/PostService';
import TokenService from '../../services/TokenService';
import { GetDataType, Post, ResponseData } from '../../types';
import * as S from './style';

function Update() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryName: '',
    status: '',
  });

  const [update, setUpdate] = useState({
    title: '',
    content: '',
    categoryName: '',
    status: '',
  });

  const postOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios.get(`https://api.totee.link/api/v1/post/${id}`).then((response) => {
      setPost(response.data.body.data);
    });
  }, []);

  const updatePost = async (postData: GetDataType | any) => {
    return await axios.put(`https://api.totee.link/api/v1/post/${id}`, post, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  };

  console.log(post);

  return (
    <S.Base>
      <div>
        <S.Input
          type="text"
          name="title"
          value={post.title}
          onChange={postOnChange}
          placeholder="제목을 입력해주세요"
        />
        <S.Select
          value={post.categoryName}
          name="categoryName"
          onChange={postOnChange}
        >
          <option value="" selected disabled hidden>
            선택
          </option>
          <option value="스터디">스터디</option>
          <option value="멘토멘티">멘토멘티</option>
        </S.Select>
        <S.Select name="status" onChange={postOnChange}>
          <option value="" selected disabled hidden>
            모집여부
          </option>
          <option value="Y">모집 중</option>
          <option value="N">모집 완료</option>
        </S.Select>
        <S.textarea
          name="content"
          value={post.content}
          onChange={postOnChange}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <S.Button onClick={updatePost}>
        <Link to={`/post/${id}`}>수정</Link>
      </S.Button>
    </S.Base>
  );
}

export default Update;
