import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, userToken } from '../../atoms';
import { clearToken } from '../../lib/api';
import TokenService from '../../services/TokenService';
import * as S from './style';
import MockProfileImage from '../../Mocks/Ellipse.jpg';
import { ProfileWrapper } from './style';

function Header() {
  const [user, setUser] = useRecoilState(userState);
  const setToken = useSetRecoilState(userToken);

  const handleLogOut = () => {
    setUser(null);
    setToken(null);
    TokenService.remove();
    clearToken();
  };
  const mock = {
    profileImage: MockProfileImage,
    nickname: 'Jason',
  };

  return (
    <>
      <S.Base>
        <S.Title>
          <Link to="/">
            <img src="/toteelogo2.png" />
          </Link>
        </S.Title>
        {mock ? (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <S.ProfileWrapper>
              <S.StyledProfileImage src={MockProfileImage} />
              <S.StyledUsername>{mock.nickname}</S.StyledUsername>
            </S.ProfileWrapper>
            {/*<S.StyledButton onClick={handleLogOut}>로그아웃</S.StyledButton>*/}
          </S.ButtonBox>
        ) : (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <S.StyledLink to="signin">로그인</S.StyledLink>
            {/* <S.StyledLink to="signup">회원 가입</S.StyledLink> */}
          </S.ButtonBox>
        )}
      </S.Base>
      <S.Space />
    </>
  );
}

export default Header;
