import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import * as S from './style';

interface Props {
  post: Post;
}

function Item({ post }: Props) {
  return (
    <S.Item>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </S.Item>
  );
}

export default memo(Item);
