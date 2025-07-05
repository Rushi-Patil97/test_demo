import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../redux/postsSlice';

const StatusTabs = () => {
  const dispatch = useDispatch();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      {['pending', 'approved', 'rejected'].map(status => (
        <Button key={status} title={status} onPress={() => dispatch(setStatusFilter(status))} />
      ))}
    </View>
  );
};

export default StatusTabs;
