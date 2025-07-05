import React from 'react';
import { FlatList } from 'react-native';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';

const PostList = () => {
  const { posts, statusFilter } = useSelector(state => state.posts);
  const filtered = posts.filter(p => p.status === statusFilter);

  return (
    <FlatList
      data={filtered}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PostItem post={item} />}
    />
  );
};

export default PostList;
