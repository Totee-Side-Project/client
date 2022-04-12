import { useQuery } from 'react-query';
import PostService from '../../services/PostService';
import Loading from '../loading/Loading';
import Item from './Item';
import * as S from './style';

function List() {
  const { data, isLoading } = useQuery(['posts'], () => PostService.getPosts());

  if (isLoading) return <Loading />;

  return (
    <S.List>
      {data?.body.data.content.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </S.List>
  );
}

export default List;
