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
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="스터디"
              onChange={postOnChange}
            />
            <S.Label>스터디</S.Label>
          </div>
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="멘토멘티"
              onChange={postOnChange}
            />
            <S.Label>멘토멘티</S.Label>
          </div>
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="프로젝트"
              onChange={postOnChange}
            />
            <S.Label>프로젝트</S.Label>
          </div>
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="동아리"
              onChange={postOnChange}
            />
            <S.Label>동아리</S.Label>
          </div>
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="LAB"
              onChange={postOnChange}
            />
            <S.Label>LAB</S.Label>
          </div>
          <div>
            <S.Radio
              type="radio"
              name="categoryName"
              value="자유게시판"
              onChange={postOnChange}
            />
            <S.Label>자유게시판</S.Label>
          </div>
        </S.Category>
        <h2>내용</h2>
        <S.textarea
          name="content"
          value={post.content}
          onChange={postOnChange}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <S.ButtonContainer>
        <S.Button onClick={onSubmit}>등록</S.Button>
      </S.ButtonContainer>
    </S.Base>
  );
}

export default Write;
