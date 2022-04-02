import styled from '@emotion/styled';
import React, { useState } from 'react';


const StyledBoxDiv = styled.div`
border: 1px solid black;
padding: 10px;
height: 100px;
`;

const ListPage = () =>{

    const [post,setPost] = useState([
        {id:1,title:"내용1"},
        {id:2,title:"내용2"},
        {id:3,title:"내용3"},
        {id:4,title:"내용4"}
    ]);

    return(
        <div>
            <h1>리스트 페이지</h1>
            <hr/>
            {post.map((post)=>(
                <div>
                    번호: {post.id} 제목: {post.title}
                </div>
                )
            )}
        </div>
    )

}

export default ListPage;