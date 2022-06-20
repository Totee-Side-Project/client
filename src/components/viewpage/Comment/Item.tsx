import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PostService from '../../../services/PostService';

function CommentItem() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['post', id], () =>
    PostService.getPost(parseInt(id!, 10))
  );

  return <div></div>;
}

export default CommentItem;
