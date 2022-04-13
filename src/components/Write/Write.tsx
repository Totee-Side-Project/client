import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '../../atoms';
import PostService from '../../services/PostService';
import { ReqPostDataType } from '../../types';
import Loading from '../loading/Loading';
import * as S from './style';

const Write = () => {
  const navigate = useNavigate();
  const token = useRecoilValue(userToken);
  const [loading, setLoading] = useState<boolean>(false);

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const postOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPost((a) => ({
      ...a,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    console.log(token);

    if (!token) {
      return navigate('/');
    }

    mutation.mutate(post);
  };

  const mutation = useMutation(
    (postData: ReqPostDataType) => PostService.addPost(postData),
    {
      onMutate: () => {
        console.log('loading');

        setLoading(true);
      },
      onSuccess: (data) => {
        console.log(data);

        console.log('등록 완료 !');
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

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
};

export default Write;
