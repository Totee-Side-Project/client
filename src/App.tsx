import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, userToken } from './atoms';
import Header from './components/header/Header';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserService from './services/UserService';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import NotFound from './pages/NotFound';
import { applyToken, clearToken } from './lib/api';
import TokenService from './services/TokenService';
import PostPage from './pages/PostPage';
import UpdatePage from './pages/UpdatePage';
import Modal from './components/Modal';

function App() {
  const setUser = useSetRecoilState(userState);
  const [token, setToken] = useRecoilState(userToken);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const response = await UserService.check(token);
          setUser(response.body.data);
          applyToken(token);
        } catch (e) {
          clearToken();
          setUser(null);
          setToken(null);
          TokenService.remove();
        }
      }
    })();
  }, [token, setToken, setUser]);

  return (
    <>
      <Modal />
      <Header />
      <Routes>
        <Route path="post/:id" element={<PostPage />} />
        <Route path="write" element={<WritePage />} />
        <Route path="update/:id" element={<UpdatePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="oauth/redirect" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
