import * as S from './style';

function Banner() {
  return (
    <S.Base>
      <S.Content>스터디와 멘토&amp;멘티를 찾는 가장 쉬운 방법</S.Content>
      <S.Content>
        <img src="/toteelogo2.png" alt="토티" width=""/>
        에서 함께 할 멘토&amp;멘티를 찾아보세요!
      </S.Content>
      <img src="/banner.png" alt="사이좋은 사람들" width="700" height="400" />
    </S.Base>
  );
}

export default Banner;
