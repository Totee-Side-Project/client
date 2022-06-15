import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import List from '../components/post/List';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, userState } from '../atoms';
import { useEffect } from 'react';
import AddInfoModal from '../components/Modal/AddInfoModal';

function MainPage() {
  const user = useRecoilValue(userState);
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    if (user && !user.nickname) {
      alert('dd');
      // <AddInfoModal/>
    }
  }, [user]);

  console.log(user);

  return (
    <>
      <button
        onClick={() => setModal({ ...modal, isOpen: true, type: 'addInfo' })}
      >
        모달
      </button>
      <Banner />
      <List />
      <Footer />
    </>
  );
}

export default MainPage;
