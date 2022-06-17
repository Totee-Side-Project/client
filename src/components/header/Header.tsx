import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState, userState, userToken } from '../../atoms';
import { clearToken } from '../../lib/api';
import TokenService from '../../services/TokenService';
import * as S from './style';
import MockProfileImage from '../../Mocks/Ellipse.jpg';
import ProfileDropdown from '../ProfileDropdown';
import { useState } from 'react';
import ToteeLogo from '../../assets/toteelogo2.png';

function Header() {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);
  const setToken = useSetRecoilState(userToken);
  const [dropdown, setDropdown] = useState(false);
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
          <Link to="/">
            <img src={ToteeLogo} />
          </Link>
        </S.Title>
        {user ? (
          <S.ButtonBox>
            <S.StyledLink to="write">새 글 쓰기</S.StyledLink>
            <S.ProfileWrapper onClick={() => setDropdown(!dropdown)}>
              <S.StyledProfileImage src={MockProfileImage} />
              <S.StyledUsername>{user.nickname}</S.StyledUsername>
            </S.ProfileWrapper>
            {user && (
              <ProfileDropdown
                isOpen={dropdown}
                setIsOpen={setDropdown}
                userInfo={user}
                signOut={handleLogOut}
              />
            )}
            {/*<S.StyledButton onClick={handleLogOut}>로그아웃</S.StyledButton>*/}
          </S.ButtonBox>
        ) : (
          <S.ButtonBox>
            {/*<S.StyledLink to="write">새 글 쓰기</S.StyledLink>*/}
            <S.LoginButton
              onClick={() =>
                setModal({ ...modal, isOpen: true, type: 'signUp' })
              }
            >
              새 글 쓰기
            </S.LoginButton>
            <S.LoginButton
              onClick={() =>
                setModal({ ...modal, isOpen: true, type: 'signUp' })
              }
            >
              로그인
            </S.LoginButton>
            {/*<S.StyledLink to="signin">로그인</S.StyledLink>*/}
            {/* <S.StyledLink to="signup">회원 가입</S.StyledLink> */}
          </S.ButtonBox>
        )}
      </S.Base>
      <S.Space />
    </>
  );
}

export default Header;
