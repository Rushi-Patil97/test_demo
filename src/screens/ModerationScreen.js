import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, updatePostStatus, clearSelected } from '../redux/postsSlice';
import { samplePosts } from '../utils/data';
import PostList from '../components/PostList';
import StatusTabs from '../components/StatusTab';

const ModerationScreen = () => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.posts.selectedPosts);

  useEffect(() => {
    dispatch(setPosts(samplePosts));
  }, []);

  const handleBatchApprove = () => {
    selected.forEach(id => dispatch(updatePostStatus({ id, status: 'approved' })));
    dispatch(clearSelected());
  };

  const handleBatchReject = () => {
    selected.forEach(id => dispatch(updatePostStatus({ id, status: 'rejected' })));
    dispatch(clearSelected());
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <StatusTabs />
      <Text style={{marginTop:20}}>Selected: {selected.length}</Text>
      <View style={{ flexDirection: 'row',justifyContent:'space-around',marginVertical:20 }}>
        <Button title="Batch Approve" onPress={handleBatchApprove} />
        <Button title="Batch Reject" onPress={handleBatchReject} />
      </View>
      <PostList />
    </View>
  );
};

export default ModerationScreen;
