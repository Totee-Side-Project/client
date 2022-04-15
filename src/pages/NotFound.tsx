import styled from '@emotion/styled';

function NotFound() {
  return (
    <Base>
      <p>요청하신 페이지를 찾을 수 없습니다</p>
    </Base>
  );
}

export default NotFound;

const Base = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);

  > p {
    font-size: 18px;
  }
`;
