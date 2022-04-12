import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, userToken } from './atoms';
import UserService from './services/UserService';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import { applyToken, clearToken } from './lib/api';

function App() {
  const setUser = useSetRecoilState(userState);
  const [token, setToken] = useRecoilState(userToken);

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await UserService.check(token);
        if (response.header.code === 200) {
          applyToken(token);
          setUser(response.body.data);
        } else {
          clearToken();
          setUser(null);
          setToken(null);
        }
      }
    })();
  }, [token, setToken, setUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="post/:id" element={<PostPage />} />
        <Route path="write" element={<WritePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
