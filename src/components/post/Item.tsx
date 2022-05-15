import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaEye } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { Post } from '../../types';
import * as S from './style';

interface Props {
  post: Post;
}

function Item({ post }: Props) {
  return (
    <S.Item>
      <Link to={`/post/${post.postId}`}>
        <S.Wrapper>
          <S.ImageWrapper>
            <S.ImageBox>
              <S.Image
                src={
                  post.categoryName === '스터디' ? '/study.png' : '/mentor.png'
                }
                alt={`${post.categoryName} 이미지`}
              />
            </S.ImageBox>
          </S.ImageWrapper>
          <S.ContentBox>
            <S.Title>{post.title}</S.Title>
            <S.InfoBox>
              <S.Info isBold>
                {`[${post.major}]`} {post.username}
              </S.Info>
              <S.IconBox>
                <S.Info>
                  <FaRegCommentDots /> {post.commentCount}
                </S.Info>
                <S.Info>
                  <FaEye /> {post.view}
                </S.Info>
                <S.Info>
                  <AiFillHeart /> {post.likeCount}
                </S.Info>
              </S.IconBox>
            </S.InfoBox>
          </S.ContentBox>
        </S.Wrapper>
      </Link>
    </S.Item>
  );
}

export default memo(Item);
