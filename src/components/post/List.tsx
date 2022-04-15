import { MouseEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { AiFillBook } from 'react-icons/ai';
import { FcConferenceCall } from 'react-icons/fc';
import PostService from '../../services/PostService';
import Loading from '../loading/Loading';
import Item from './Item';
import * as S from './style';
import { Category } from '../../types';

function List() {
  const [category, setCategory] = useState<Category>('전체');

  const handleCategoryChange = (e: MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as Category;
    setCategory(text);
  };

  const { data, isLoading } = useQuery(['posts', category], () =>
    PostService.getPosts(1, category)
  );

  if (isLoading) return <Loading />;

  return (
    <S.Base>
      <S.Categories>
        <S.Category
          onClick={handleCategoryChange}
          isFocus={category === '전체'}
        >
          <S.CategoryName>전체</S.CategoryName>
        </S.Category>
        <S.Category
          onClick={handleCategoryChange}
          isFocus={category === '스터디'}
        >
          <AiFillBook />
          <S.CategoryName>스터디</S.CategoryName>
        </S.Category>
        <S.Category
          onClick={handleCategoryChange}
          isFocus={category === '멘토멘티'}
        >
          <FcConferenceCall />
          <S.CategoryName>멘토멘티</S.CategoryName>
        </S.Category>
      </S.Categories>
      <S.List>
        {data?.body.data.content.map((post) => (
          <Item key={post.postId} post={post} />
        ))}
      </S.List>
    </S.Base>
  );
}

export default List;
