import * as S from './style';
import Bannerimg from '../../assets/banner.png';
import ToteeLogo2 from '../../assets/toteelogo2.png';

function Banner() {
  return (
    <S.Base>
      <S.Content>스터디와 멘토&amp;멘티를 찾는 가장 쉬운 방법</S.Content>
      <S.Content>
        <img src={ToteeLogo2} alt="토티" width="" />
        에서 함께 할 멘토&amp;멘티를 찾아보세요!
      </S.Content>
      <img src={Bannerimg} alt="사이좋은 사람들" width="620" height="350" />
    </S.Base>
  );
}

export default Banner;
