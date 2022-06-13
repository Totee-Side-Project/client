import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import List from '../components/post/List';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms';

function MainPage() {
  return (
    <>
      <Banner />
      <List />
      <Footer />
    </>
  );
}

export default MainPage;
