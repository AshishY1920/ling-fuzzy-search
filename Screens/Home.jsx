import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import leaderBoard from '../assets/leaderboard.json';
import HeaderStyle from '../Components/Header/HeaderStyle/HeaderStyle';
import Header from '../Components/Header/Header';
import LeaderBoard from '../Components/LeaderBoard/LeaderBoard';
import LeaderBoardStyle from '../Components/LeaderBoard/LeaderBoardStyle/LeaderBoardStyle';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const Home = () => {
  const [isNull, setIsNull] = useState(null);

  const [filteredLeaders, setFilteredLeaders] = useState([]);

  // Search Functionality
  const handleSearch = val => {
    if (val === '') {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        textBody: 'oh hoo Please Try Searching with User Name',
      });
      return;
    }
    // Trimming and converting the search value to lowercase
    const searchValue = val.trim().replace(/\s/g, '').toLowerCase();

    // Filter leaders whose names contain the search query partially or approximately
    const searchedUserData = leader_arr.find(leader =>
      leader.name.toLowerCase().replace(/\s/g, '').includes(searchValue),
    );

    // If no matching leaders found, show error message
    if (!searchedUserData) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        textBody:
          'No matching users found! Please try again with a different search term.',
      });
      return;
    }

    // Sorting leaders by bananas
    const sortedLeadersByBananas = [...leader_arr].sort(
      (a, b) => b.bananas - a.bananas,
    );

    // Get index of the searched user
    const searchedUserIndex = sortedLeadersByBananas.findIndex(
      leader => leader === searchedUserData,
    );

    // Showing top ten leaders with the highest number of bananas
    const topTenLeaders = sortedLeadersByBananas.slice(0, 10);

    // Calculating Rank
    const searchedUserRank = searchedUserIndex + 1;

    // Updating Rank
    const updatedLeaders = topTenLeaders.map((leader, index) => ({
      ...leader,
      stars: index + 1,
      isSearchedUser: leader === searchedUserData,
    }));

    // Highlighting in Top 10 leaders
    if (searchedUserIndex >= 10) {
      updatedLeaders.pop();
      updatedLeaders.push({
        key: 'placeholder',
        name: searchedUserData.name,
        bananas: searchedUserData.bananas,
        stars: searchedUserRank,
        isSearchedUser: true,
      });
    }

    setFilteredLeaders(updatedLeaders);
  };

  // console.log(JSON.stringify(filteredLeaders, null, 2));

  //  On Clicked Removed Icon FilteredLeaders To Null
  const handleBack = () => {
    setFilteredLeaders([]);
  };

  useEffect(() => {
    // if search input value is === ""
    handleBack();
  }, []);

  // Converting The Json / Filtering out the user where name field is ""
  const leader_arr = Object.keys(leaderBoard)
    .filter(userId => leaderBoard[userId].name.trim() !== '')
    .map(userId => ({
      key: userId,
      ...leaderBoard[userId],
    }));

  // Sort List By Name
  const [ascending, setAscending] = useState(true);

  const handleSortByName = () => {
    let arrToSort = leader_arr; // Default array to sort

    if (filteredLeaders.length > 0) {
      arrToSort = filteredLeaders; // If filteredLeaders is not empty, sort it instead
    }

    const sortedUser = [...arrToSort].sort((a, b) => {
      if (ascending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredLeaders(sortedUser);
    setAscending(!ascending);
  };

  const [rankAscending, setRankAscending] = useState(true); // State variable to track sort order

  const handleSortByRank = () => {
    // Creating a copy of the state variable to sort
    let arrToSort = [...leader_arr];

    if (filteredLeaders.length > 0) {
      arrToSort = [...filteredLeaders];
    }

    const sortedUser = arrToSort.sort((a, b) => {
      // First, compare by Rank count
      if (a.stars !== b.stars) {
        // Sort by Rank count in ascending or descending order based on the toggle
        return rankAscending ? a.stars - b.stars : b.stars - a.stars;
      } else {
        // If Rank count is the same, sort alphabetically by name
        return a.name.localeCompare(b.name);
      }
    });

    // Update the state with the sorted array
    setFilteredLeaders(sortedUser);

    // Toggle the sort order for the next click
    setRankAscending(!rankAscending);
  };
  return (
    <View>
      <Image
        style={HeaderStyle.bgContainer}
        source={require('../assets/Icons/4.jpg')}
      />
      {/* <Image
        style={HeaderStyle.abstractImage}
        source={require('../assets/Icons/1.png')}
      /> */}
      {/* Header Component */}
      <View style={[HeaderStyle.Container, {flex: 1}]}>
        <Header
          handleSearch={handleSearch}
          searchNull={isNull}
          setIsNull={setIsNull}
          handleBack={handleBack}
        />
        {/* Header Component */}

        {/* LeaderBoard Data Component */}

        {/* Leader Board Headline / Sorting */}
        <View style={LeaderBoardStyle.containerRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={LeaderBoardStyle.itemData}
            onPress={handleSortByRank}>
            <Text
              style={{
                fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                textAlign: 'left',
                color: 'white',
                fontSize: RFPercentage(2.2),
              }}>
              Rank <FontAwesome name="sort" size={RFValue(18)} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LeaderBoardStyle.userName}
            activeOpacity={0.8}
            onPress={handleSortByName}>
            <Text
              style={{
                flex: 4,
                textAlign: 'center',
                fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                color: 'white',
                fontSize: RFPercentage(2.2),
              }}>
              Name <FontAwesome name="sort" size={RFValue(18)} />
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              LeaderBoardStyle.itemData,
              {
                fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
                textAlign: 'right',
              },
            ]}>
            Bananas
          </Text>
        </View>
        {/* Leader Board Headline / Sorting */}

        {/* User List View */}
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.key}
          data={filteredLeaders.length ? filteredLeaders : leader_arr}
          renderItem={({item}) => {
            // Rendering LeaderBoard Component
            return <LeaderBoard key={item.key} item={item} />;
          }}
        />
        {/* User List View */}
      </View>
      {/* LeaderBoard Data Component */}
    </View>
  );
};

export default Home;
