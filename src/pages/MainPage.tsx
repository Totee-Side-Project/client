import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import List from '../components/post/List';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms';

function MainPage() {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <>
      <button
        onClick={() => setModal({ ...modal, isOpen: true, type: 'signUp' })}
      >
        asd
      </button>
      <Banner />
      <List />
      <Footer />
    </>
  );
}

export default MainPage;
