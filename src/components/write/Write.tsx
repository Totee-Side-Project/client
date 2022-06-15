import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PostService from '../../services/PostService';
import Loading from '../loading/Loading';
import * as S from './style';

function Write() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryName: '',
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

  const mutation = useMutation(PostService.addPost, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        navigate('/', {
          replace: true,
        });
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const onSubmit = () => {
    mutation.mutate(post);
  };

  if (loading) return <Loading />;

  return (
    <S.Base>
      <div>
        <h2>제목</h2>
        <div>
          <S.Input
            type="text"
            name="title"
            value={post.title}
            onChange={postOnChange}
            placeholder="제목을 입력하세요."
          />
        </div>
        <h2>카테고리</h2>
        <S.Category>
          <S.Radio
            type="radio"
            name="study"
            value={post.title}
            checked
            onChange={postOnChange}
          /><label>스터디</label>
          <S.Radio
            type="radio"
            name="study"
            value={post.title}
            checked
            onChange={postOnChange}
          /><label>멘티멘티</label>
        </S.Category>
        <h2>내용</h2>
        <S.textarea
          name="content"
          value={post.content}
          onChange={postOnChange}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <S.Button onClick={onSubmit}>등록</S.Button>
    </S.Base>
  );
}

export default Write;
