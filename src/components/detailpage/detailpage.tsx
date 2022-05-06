import axios from 'axios';
import {Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import {useParams} from 'react-router-dom';
import PostService from '../../services/PostService';
import {Category, Post} from '../../types';
import * as S from './style';

function Detailpage() {

    const {id} = useParams();

    // const [users, setUsers] = useState<any[]>();
    const [posts, setPosts] = useState<any[] | any>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);




    useEffect(() => {
        // const fetchUsers = async () => {
            const fetchPosts = async () => {
            try {
                setError(null);
                setLoading(true);
                // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const responses = await axios.get('https://api.totee.link/api/v1/post/1');
                // setUsers(response.data);
                setPosts(responses.data);
            } catch (e: any) {
                setError(e);
            }
            setLoading(false);
        };
        // fetchUsers();
        fetchPosts();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;
    if (!posts) return null;

    function postlist(){
        const reqPost = {
            method : "get",
            header : {
                "content-type" : "application/json"
            }
        }
        fetch("/api/v1/post/1", reqPost).then((res) => res.json()).then(data => console.log(data));
    }
   postlist();


    return (
        <>
        <div>{id}번 게시글</div>
        <ul>
            {/*{users.map((user => (*/}
            {/*    <li key={user.id}>*/}
            {/*        {user.username}({user.name})*/}
            {/*    </li>*/}
            {/*)))}*/}
            {posts.body.data.map(((posts:string|any) => (
                <li key={posts.postId}>
                    {posts.body.data.title}({posts.body.data.content})
                </li>
            )))}
        </ul>
        </>
    );
}

export default Detailpage;