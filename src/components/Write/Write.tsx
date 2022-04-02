import React from 'react';
import * as S from './style';
import * as E from '../sign-in/style';
import {Link} from "react-router-dom";
import {useState} from 'react';

const Write = () => {

    const [post,setPost] = useState({
        title: '',
        content: '',
    });


    const [Board,setBoard] = useState({
        title: '',
        language: '',
        content: ''
    })

    const handleWrite = () => {
        // ListPage의 setPost에 담기
        let post = {id:5,title:"인풋값"}
    }

    return (

        <S.Base>
            <S.StyledForm>
                <S.Input type="text" id="title" placeholder="제목을 입력해주세요"/>
                <S.ul>
                    <S.li id='li'>
                        <S.label>언어 선택</S.label>
                        <S.Select placeholder="프로젝트/스터디 진행 언어 선택">
                            <option>언어 선택</option>
                            <option>C</option>
                            <option>C++</option>
                            <option>C#</option>
                            <option>spring</option>
                        </S.Select>
                    </S.li>
                </S.ul>
                <S.textarea placeholder='내용을 입력해주세요 !'/>
                <S.btn>
                    <S.Button>
                        <Link to="/">취소</Link>
                    </S.Button>
                <S.Button type="submit" >등록</S.Button>
                </S.btn>
            </S.StyledForm>
        </S.Base>
    );
};

export default Write;