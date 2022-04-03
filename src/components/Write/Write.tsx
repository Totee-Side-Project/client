import React from 'react';
import * as S from './style';
import * as E from '../sign-in/style';
import {Link} from "react-router-dom";
import {useState, ChangeEvent} from 'react';
import axios from "axios";
import { useMutation } from "react-query";
import UserService from '../../services/UserService';


const Write = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const [post,setPost] = useState(
        {
            title: "",
            intro: "",
            content: "",
            token: ""
        }
    );

    const postOnChagne = (e :ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setPost((a)=>({
            ...a,
            [name]: value,
        }));

    };


    const mutation = useMutation(UserService.postPostData,{
        onMutate: () => {
            setLoading(true);
        },
        onSuccess: (post) => {
            alert('등록 완료!');
        },
        onSettled: () => {
            setLoading(false);
        },
    });


    const onSubmit = () => {
        mutation.mutate(post);
    }


    console.log({post});
    return (
        <S.Base>
            <S.StyledForm onSubmit={onSubmit}>
                <S.Input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={postOnChagne}
                    placeholder="제목을 입력해주세요"
                />
                <S.Input
                    type="text"
                    name="content"
                    value={post.content}
                    onChange={postOnChagne}
                    placeholder="제목을 입력해주세요"
                />
                <S.label>
                    <input type="radio" name="choose"/>멘토&멘티
                </S.label>
                <S.label>
                    <input type="radio" name="choose" value="study"/>스터디
                </S.label>
                <S.textarea
                    name="content"
                    // value={post.content}
                    placeholder='내용을 입력해주세요 !'/>
                <S.btn>
                    <S.Button>
                        <Link to="/">취소</Link>
                    </S.Button>
                <S.Button type="submit">등록</S.Button>
                </S.btn>
            </S.StyledForm>
        </S.Base>
    );
};

{/*<S.ul>*/}
{/*    <S.li id='li'>*/}
{/*        <S.label>언어 선택</S.label>*/}
{/*        <S.Select placeholder="프로젝트/스터디 진행 언어 선택">*/}
{/*            <option>언어 선택</option>*/}
{/*            <option>C</option>*/}
{/*            <option>C++</option>*/}
{/*            <option>C#</option>*/}
{/*            <option>spring</option>*/}
{/*        </S.Select>*/}
{/*    </S.li>*/}
{/*</S.ul>*/}

export default Write;