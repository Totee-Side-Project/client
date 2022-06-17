import { useRecoilState } from 'recoil';
import { infoState } from '../../../../atoms';
import { ModalContent, ModalTitle } from '../../SignUpModal/style';

export const Page3 = () => {
  const [info, setInfo] = useRecoilState(infoState);
  console.log(info);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    const { value } = e.target;
    setInfo({
      ...info,
      univercity: value,
    });
  };

  return (
    <>
      <ModalTitle>대학 선택</ModalTitle>
      <ModalContent>대학을 선택해주세요!</ModalContent>
      <select name="univercity" onChange={onChange}>
        <option value="인문예술대학">인문예술대학</option>
        <option value="융합전공지원센터">융합전공지원센터</option>
        <option>글로벌산업통상대학</option>
        <option>과학기술대학</option>
        <option>공공인재대학</option>
        <option>휴먼IT공과대학</option>
        <option>대순종합대학</option>
      </select>
    </>
  );
};
