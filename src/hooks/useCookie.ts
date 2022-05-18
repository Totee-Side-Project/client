import { useCookies } from 'react-cookie';

function useCookie(key: string) {
  const [cookies, setCookie] = useCookies([key]);

  return { cookies, setCookie };
}

export default useCookie;
