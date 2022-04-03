import styled from '@emotion/styled';
import React, { useState } from 'react';

const StyledBoxDiv = styled.div`
border: 1px solid black;
padding: 10px;
height: 100px;
`;

const ListPage = () =>{

    const [post,setPost] = useState([
        {title:1,content:"내용1"}
    ]);

    return(
        <div>
            <h1>리스트 페이지</h1>
            <hr/>
            {post.map((post)=>(
                <div>
                    번호: {post.title} 제목: {post.content}
                </div>
                )
            )}
        </div>
    )

}

export default ListPage;