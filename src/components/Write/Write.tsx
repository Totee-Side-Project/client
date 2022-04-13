import {ChangeEvent, useState} from 'react';
import {useMutation} from 'react-query';
import PostService from '../../services/PostService';
import * as S from './style';

const Write = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryName: '',
  });

  const postOnChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;

    setPost((a) => ({
      ...a,
      [name]: value,
    }));
  };


  const onSubmit = () => {
    mutation.mutate(post);
    console.log(post);
  };

  const mutation = useMutation(PostService.postPostData, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      console.log('등록 완료 !');
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  // console.log({post});

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
          <S.Label>
            <input
                type="radio"
                name="categoryName"
                value="스터디"
                onChange={postOnChange}/>
            스터디
          </S.Label>
          <S.Label>
            <input
                type="radio"
                name="categoryName"
                value="멘토멘티"
                onChange={postOnChange}/>
            멘토&멘티
          </S.Label>
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
