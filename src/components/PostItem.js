import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { updatePostStatus, toggleSelectPost } from '../redux/postsSlice';

const PostItem = ({ post, isSelected }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(toggleSelectPost(post.id))} style={{padding: 10, borderBottomWidth: 1,borderRadius:10,borderWidth:1,marginVertical:10 }}>
      <Text>{post.title}</Text>
      <Text>{post.author.username} • {new Date(post.reportedAt).toLocaleString()}</Text>
      <Text>Reason: {post.reportedReason}</Text>
      <View style={{ flexDirection: 'row',justifyContent:'space-around', marginVertical: 5 }}>
        <Button title="Approve" disabled={post.status !== 'pending'} onPress={() => dispatch(updatePostStatus({ id: post.id, status: 'approved' }))} />
        <Button title="Reject" disabled={post.status !== 'pending'} onPress={() => dispatch(updatePostStatus({ id: post.id, status: 'rejected' }))} />
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
