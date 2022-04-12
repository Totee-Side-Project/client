import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userToken } from '../../atoms';
import PostService from '../../services/PostService';
import { ReqPostDataType } from '../../types';
import * as S from './style';

const Write = () => {
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
      return;
    }

    console.log('통과');

    mutation.mutate(post);
    console.log(post);
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
      onError: (err: any) => {
        console.log(err.response);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

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
