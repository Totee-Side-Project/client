import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PostService from '../../services/PostService';
import { GetDataType, Post, ResponseData } from '../../types';
import Loading from '../loading/Loading';
import Comment from '../viewpage/Comment/comment';
import * as S from './style';
import BackIcon from '../../assets/backicon.svg';
import CommentItem from './Comment/Item';

function Viewpage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(['post', id], () =>
    PostService.getPost(parseInt(id!, 10))
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>에러가 발생했습니다</div>;

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };

  const deletePost = async (postData: GetDataType | any) => {
    return await axios.delete(`https://api.totee.link/api/v1/post/${id}`, {
      headers,
    });
  };

  const updateOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  return (
    <S.Base>
      <div>
        <S.iconWrapper>
          <Link to="/">
            <img src={BackIcon} alt="뒤로 가기 이미지" />
          </Link>
        </S.iconWrapper>
        <S.TitleWrapper>
          {data && <S.Title>{data.body.data.title}</S.Title>}
        </S.TitleWrapper>
        <br />
        <S.NameWrapper>
          {data && (
            <div>
              <S.Name>작성자 : {data.body.data.nickname}</S.Name>
              <S.Date>{data.body.data.createdAt}</S.Date>
              <S.BtnWrapper>
                <S.Button onClick={deletePost}>
                  <Link to="/">삭제</Link>
                </S.Button>
                <S.Button onClick={updateOnClick}>
                  <Link to={`/update/${id}`}>수정</Link>
                </S.Button>
              </S.BtnWrapper>
            </div>
          )}
        </S.NameWrapper>
        <br />
        <S.ContentWrapper>
          {data && <S.Content>{data.body.data.content}</S.Content>}
        </S.ContentWrapper>
      </div>
      <div>
        <br />
        <br />
        <CommentItem />
        <br /> <br /> <br />
        <div>댓글</div>
        <br />
        <hr />
        <br />
        {data && (
          <div>
            <S.Name>{data.body.data.commentDTOList[0].username}</S.Name>
            <S.Date>{data.body.data.commentDTOList[0].created_at}</S.Date>
            <br />
            <br />
            <div>{data.body.data.commentDTOList[0].content}</div>
            <br />
            <br />
            {/*<S.Name>{data.body.data.commentDTOList[2].username}</S.Name>*/}
            {/*<S.Date>{data.body.data.commentDTOList[2].created_at}</S.Date>*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<div>{data.body.data.commentDTOList[2].content}</div>*/}
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Comment />
      </div>
    </S.Base>
  );
}

export default Viewpage;
