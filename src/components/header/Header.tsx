import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import * as S from "./style";

function Header() {
  const user = useRecoilValue(userState);

  return (
    <>
      <S.Base>
        <S.Title>
          <Link to="/">Totee</Link>
        </S.Title>
        {user ? (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <span>{user.username}</span>
            <S.StyledButton>로그아웃</S.StyledButton>
          </S.ButtonBox>
        ) : (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <S.StyledLink to="signin">로그인</S.StyledLink>
            <S.StyledLink to="signup">회원 가입</S.StyledLink>
          </S.ButtonBox>
        )}
      </S.Base>
      <S.Space />
    </>
  );
}

export default Header;
