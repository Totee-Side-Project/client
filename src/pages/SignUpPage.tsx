import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms";
import Form from "../components/sign-up/Form";

function SignUpPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return <Form />;
}

export default SignUpPage;
