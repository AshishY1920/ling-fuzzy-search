import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderStyle from './HeaderStyle/HeaderStyle';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Searchbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Header = React.memo(
  ({handleSearch, handleBack, searchNull, setIsNull}) => {
    const [search, setSearch] = useState('');

    const handleInputChange = text => {
      setSearch(text);
    };

    const handleSubmit = () => {
      handleSearch(search);
    };

    const handleDelete = () => {
      handleBack();
      setSearch('');
      Keyboard.dismiss();
    };

    useEffect(() => {
      if (searchNull) {
        setSearch('');
        setIsNull(false);
      }
    }, [searchNull]);
    return (
      <View style={{paddingBottom: RFValue(10)}}>
        {/* Header Top */}
        <View style={HeaderStyle.headerContainer}>
          <View style={HeaderStyle.logoContainer}>
            <TouchableOpacity activeOpacity={0.8} style={HeaderStyle.Logo}>
              <Image
                style={HeaderStyle.Userlogo}
                source={require('../../assets/Icons/logo.png')}
              />
            </TouchableOpacity>
            <Text style={HeaderStyle.loginText}>Hello, Admin</Text>
          </View>
          <View></View>
        </View>
        {/* Header Top */}

        <View style={HeaderStyle.search_content}>
          {/* Search Input */}
          <Searchbar
            placeholder="Search"
            onChangeText={handleInputChange}
            value={search}
            autoCapitalize="none"
            inputStyle={{
              fontFamily: 'HvDTrial_Brandon_Grotesque_bold-BF64a625c9151d5',
              color: 'white',
              fontSize: RFPercentage(2),
            }}
            iconColor="white"
            placeholderTextColor={'white'}
            style={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.20)',
              width: wp('80%'),
              borderWidth: 1,
              fontSize: RFPercentage(2),
              flex: 4,
            }}
            onSubmitEditing={handleSubmit}
            onClearIconPress={handleDelete}
          />

          {/* Button */}
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignSelf: 'center',
              display: 'flex',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSubmit}
              style={HeaderStyle.searchButton}>
              <AntDesign color="white" name="search1" size={RFValue(22)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  },
);

export default Header;
