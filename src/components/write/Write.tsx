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

  const onSubmit = () => {
    mutation.mutate(post);
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

  if (loading) return <Loading />;

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
          name="categoryName"
          value={post.categoryName}
          onChange={postOnChange}
        >
          <option value="" disabled hidden>
            선택
          </option>
          <option value="스터디">스터디</option>
          <option value="멘토멘티">멘토멘티</option>
        </S.Select>
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
