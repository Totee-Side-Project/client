import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PostService from '../../../services/PostService';
import { ResponseData } from '../../../types';

function Comment() {
  const { id } = useParams<string>();

  const [comment, setComment] = useState({
    content: '',
    postId: id,
  });

  const postOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(comment);
  };

  const mutation = useMutation(PostService.addComment, {
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: (data) => {
      console.log('post 성공');
    },
    onSettled: () => {
      // setLoading(false);
    },
  });

  const onSubmit = () => {
    mutation.mutate(comment);
  };

  const getComment = async () => {
    const response = await axios
      .get(`api/v1/comment/${id}`)
      .then((response) => {
        return response.data;
        console.log(response.data);
      });
  };
  return (
    <div>
      {/*<br/> <br/> <br/>*/}
      {/*<div>댓글</div>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      <div>
        <input
          type="text"
          name="content"
          value={comment.content}
          onChange={postOnChange}
          placeholder="댓글을 입력하세요"
        />
      </div>
      <button onClick={onSubmit}>등록</button>
    </div>
  );
}

export default Comment;
