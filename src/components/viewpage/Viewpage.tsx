import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PostService from '../../services/PostService';
import Loading from '../loading/Loading';
import * as S from './style';

function Viewpage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(['post', id], () =>
    PostService.getPost(parseInt(id!, 10))
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <S.Base>
      <div>
        <S.iconWrapper>
          <Link to="/">
            <img src="/backicon.png" alt="뒤로 가기 이미지" />
          </Link>
        </S.iconWrapper>
        <S.TitleWrapper>
          {data && <S.Title>{data.body.data.title}</S.Title>}
        </S.TitleWrapper>
        <br />
        <S.NameWrapper>
          {data && (
            <div>
              <S.Name>작성자 : {data.body.data.username}</S.Name>
              <S.Date>{data.body.data.createdAt}</S.Date>
            </div>
          )}
        </S.NameWrapper>
        <br />
        <S.ContentWrapper>
          {data && <S.Content>{data.body.data.content}</S.Content>}
        </S.ContentWrapper>
      </div>
    </S.Base>
  );
}

export default Viewpage;
