import { MouseEvent, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroller';
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

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['posts', category],
    ({ pageParam = 0 }) => PostService.getPosts(pageParam, category),
    {
      getNextPageParam: (lastPage) =>
        lastPage.body.data.last ? undefined : lastPage.body.data.number + 1,
    }
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
          <S.CategoryName>스터디</S.CategoryName>
        </S.Category>
        <S.Category
          onClick={handleCategoryChange}
          isFocus={category === '멘토멘티'}
        >
          <S.CategoryName>멘토멘티</S.CategoryName>
        </S.Category>
      </S.Categories>
      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        <S.List>
          {data?.pages.map((pageData) =>
            pageData.body.data.content.map((post) => (
              <Item key={post.postId} post={post} />
            ))
          )}
        </S.List>
      </InfiniteScroll>
    </S.Base>
  );
}

export default List;
