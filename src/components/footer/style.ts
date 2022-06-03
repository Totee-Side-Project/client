import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  padding: 3rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(125, 125, 125, 0.1) 0%, rgba(148, 148, 148, 0) 12%), rgb(255, 255, 255);

  @font-face {
    font-family: 'Happiness-Sans-Title';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Happiness-Sans-Title';
`;

export const FooterAbout = styled.div`
  padding: 0 4rem 0 0;

  > p{
    line-height : 150%;
    color: #6F6C90;
  }
`;

export const FooterSocial = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  gap: 22px;
  align-items: center;
  margin-top: 24px;
`;

export const FooterEmail = styled.div`
  padding: 0 0 0 0;
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: -16px;

  > a{
    padding: 1rem 0 0 0;
  }
`;

export const FooterSubcription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #000;
  font-weight: bold;

  > p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
     'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

`;

export const FooterSubcriptionHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubcriptionText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterInput = styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #;
`;
export const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 30px;
  }

  > h2{
    color: #170F49;
    font-size: 24px;
    font-weight : bold;
  }

  a {
    color: #6F6C90;
    text-decoration: none;
    margin-bottom: 15px;
  }

  a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }
`;
export const FooterEmailForm = styled.h2`
  margin-bottom: 32px;
`;
export const SocialIconLink = styled.div`
  color :#363636;
  font-size: 24px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin:40px auto 0 auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialLogo = styled.div`
  color:#363636;
  justify-self:start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-self: center;
  margin-bottom: 16px;
`;

export const WebsiteRight = styled.div`
  color:#363636;
  margin-bottom: 16px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

  hr {
    background-color:#D9DBE9;
  }
`;