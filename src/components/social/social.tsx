export const API_BASE_URL = 'https://api.totee.link';
export const OAUTH2_REDIRECT_URI = 'https://totee.site/oauth/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorization/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const KAKAO_AUTH_URL = API_BASE_URL + '/oauth2/authorization/kakao?redirect_uri=' + OAUTH2_REDIRECT_URI;

function Social() {
  return (
    <a href={GOOGLE_AUTH_URL}><img src="" alt="" />google login</a>
  );
}

export default Social;