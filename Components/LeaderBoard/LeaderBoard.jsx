import {View, Text} from 'react-native';
import React from 'react';
import LeaderBoardStyle from './LeaderBoardStyle/LeaderBoardStyle';

const LeaderBoard = ({item}) => {
  return (
    <View
      style={[
        LeaderBoardStyle.container,
        {
          backgroundColor: item.isSearchedUser
            ? 'rgba(255, 0, 0, 0.3)'
            : 'rgba(255, 255, 255, 0.20)',
        },
      ]}>
      <Text style={LeaderBoardStyle.itemData}>{item.stars}</Text>
      <Text style={[LeaderBoardStyle.userName, {flex: 4}]}>
        {item?.name?.length > 18 //slicing the user name if length is greater than 18
          ? item?.name?.slice(0, 18) + '...'
          : item?.name}
      </Text>
      <Text style={LeaderBoardStyle.itemData}>{item.bananas}</Text>
    </View>
  );
};

export default LeaderBoard;
