import React from 'react';
import * as S from './style';
import * as E from '../sign-in/style';
import {Link} from "react-router-dom";
import {useState, ChangeEvent} from 'react';
import axios from "axios";
import { useMutation } from "react-query";
import UserService from '../../services/UserService';
import TokenService from '../../services/TokenService';


const Write = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const [post,setPost] = useState(
        {
            title: "",
            content: "",
        }
    );


    const postOnChange = (e :ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setPost((a)=>({
            ...a,
            [name]: value,
        }));
    };


    const onSubmit = () => {
        mutation.mutate(post);
        console.log(post);
    };


    const mutation = useMutation(UserService.postPostData,{
        onMutate: () => {
            setLoading(true);
        },
        onSuccess: () => {
            console.log("등록 완료 !")
        },
        onSettled: () => {
            setLoading(false);
        },
    });


    // console.log({post});
    
    return (

        <S.Base>
            <div>
                <S.Input type="text" name="title" value={post.title} onChange={postOnChange} placeholder="제목을 입력해주세요"/>
                <S.textarea name="content" value={post.content} onChange={postOnChange} placeholder="내용을 입력해주세요"/>
            </div>
            <S.Button onClick={onSubmit}>등록</S.Button>
        </S.Base>

    );
};


export default Write;