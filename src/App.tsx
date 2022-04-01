import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, userToken } from "./atoms";
import { useEffect } from "react";
import UserService from "./services/UserService";

function App() {
  const setUser = useSetRecoilState(userState);
  const token = useRecoilValue(userToken);

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await UserService.check(token);
        if (response.header.code === 200) {
          setUser(response.body.data);
        }
      }
    })();
  }, [token, setUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
