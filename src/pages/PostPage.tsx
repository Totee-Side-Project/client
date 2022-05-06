import { useParams } from 'react-router-dom';
import Detailpage from '../components/detailpage/detailpage';

function PostPage() {
  const {id} = useParams();

  return (
      <><>{id}번 게시글</>
        <Detailpage/></>

)
}

export default PostPage;
