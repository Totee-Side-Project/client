import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, userToken } from '../../atoms';
import { clearToken } from '../../lib/api';
import TokenService from '../../services/TokenService';
import * as S from './style';

function Header() {
  const [user, setUser] = useRecoilState(userState);
  const setToken = useSetRecoilState(userToken);

  const handleLogOut = () => {
    setUser(null);
    setToken(null);
    TokenService.remove();
    clearToken();
  };

  return (
    <>
      <S.Base>
        <S.Title>
          <Link to="/"><img src='/toteelogo2.png'/></Link>
        </S.Title>
        {user ? (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <span>{user.username}</span>
            <S.StyledButton onClick={handleLogOut}>로그아웃</S.StyledButton>
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
