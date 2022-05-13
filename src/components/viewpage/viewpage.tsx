import axios from 'axios';
import {Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import {Link, useParams} from 'react-router-dom';
import PostService from '../../services/PostService';
import {Category, Post, Posts} from '../../types';
import Loading from '../loading/Loading';
import * as S from './style';


function Viewpage() {

    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>();

    const fetchPost = async () => {
        try {
            setError(null);
            setLoading(true);
            const responese = await axios.get(`https://api.totee.link/api/v1/post/${id}`);
            setData(responese.data);
        } catch (e: any){
            setError(e);
        }
        setLoading(false)
    };

    useEffect(()=>{
        fetchPost();
    },[]);

    if (loading) return <Loading />;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return <div>존재하지 않는 글입니다.</div>;

    return (
        <S.Base>
            <div>
                <S.iconWrapper>
                    <Link to='/'><img src='/backicon.png'/></Link>
                </S.iconWrapper>
                <S.TitleWrapper>
                    {data && <S.Title>{data.body.data.title}</S.Title>}
                </S.TitleWrapper>
                <br/>
                <S.NameWrapper>
                    {data && <S.Name>작성자 :  {data.body.data.username}</S.Name>}
                </S.NameWrapper>
                <br/>
                <S.ContentWrapper>
                    {data && <S.Content>{data.body.data.content}</S.Content>}
                </S.ContentWrapper>
            </div>
        </S.Base>
    );
}

export default Viewpage;