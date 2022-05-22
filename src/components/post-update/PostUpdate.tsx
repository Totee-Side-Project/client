import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PostService from '../../services/PostService';
import { GetDataType, Post, ReqPostDataType, ResponseData } from '../../types';
import Loading from '../loading/Loading';
import * as S from './style';

function PostUpdate() {
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

    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };

  const updatePost = async (postData: GetDataType | any) => {
    return await axios.put(`https://api.totee.link/api/v1/post/${id}`, update, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  };

  return (
    <S.Base>
      <div>
        <S.Input
          type="text"
          name="title"
          value={update.title}
          onChange={postOnChange}
          placeholder="제목을 입력해주세요"
        />
        <S.Select name="categoryName" onChange={postOnChange}>
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
          value={update.content}
          onChange={postOnChange}
          placeholder="내용을 입력해주세요"
        />
      </div>
      {/*<S.Button onClick={() => PostService.updatePost(update, id as string)}>*/}
      <S.Button onClick={updatePost}>
        <Link to="/">수정</Link>
      </S.Button>
    </S.Base>
  );
}

export default PostUpdate;
