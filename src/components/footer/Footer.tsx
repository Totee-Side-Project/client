import * as S from './style';
import { Link } from 'react-router-dom';
import ToteeLogo from '../../assets/totee.png';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import mail from '../../assets/mail.svg';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterLinks>
        <S.FooterAbout>
          <Link to="/">
            <img src={ToteeLogo} />
          </Link>
          <p>스터디와 멘토멘티를 찾는 가장 쉬운 방법</p>
          <p>토티에서 함께 할 멘토멘티를 찾아보세요!</p>
          <S.FooterSocial>
            <img src={facebook} />
            <img src={github} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={youtube} />
            {/*<FontAwesomeIcon icon={faFacebook} color='#4A3AFF'/>*/}
            {/*<FontAwesomeIcon icon={faGithub} color='#4A3AFF'/>*/}
            {/*<FontAwesomeIcon icon={faInstagram} color='#4A3AFF'/>*/}
            {/*<FontAwesomeIcon icon={faTwitter} color='#4A3AFF'/>*/}
          </S.FooterSocial>
        </S.FooterAbout>
        <S.FooterLinkItems>
          <h2>FRONT-END</h2>
          <Link to="/">NOAH</Link>
          <Link to="/">RULU</Link>
          <Link to="/">JASON</Link>
        </S.FooterLinkItems>
        <S.FooterLinkWrapper></S.FooterLinkWrapper>
        <S.FooterLinkItems>
          <h2>BACK-END</h2>
          <Link to="/">MARINE</Link>
        </S.FooterLinkItems>
        <S.FooterLinkItems>
          <h2>Contact us</h2>
          <S.FooterEmail>
            <img src={mail} />
            <Link to="/">rnjstmdals6@naver.com</Link>
          </S.FooterEmail>
        </S.FooterLinkItems>
      </S.FooterLinks>
      <S.SocialMedia>
        <br></br>
        <br></br>
        <br></br>
      </S.SocialMedia>
    </S.FooterContainer>
  );
}

export default Footer;
