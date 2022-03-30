import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const loadingSpinner = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;

  > span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #eee;
    border-top-color: #4f46e5;
    animation: 1s ${loadingSpinner} linear infinite;
  }
`;
