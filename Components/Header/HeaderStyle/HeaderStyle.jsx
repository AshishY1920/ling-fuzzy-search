import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const HeaderStyle = StyleSheet.create({
  Container: {
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(20),
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  abstractImage: {
    position: 'absolute',
    height: undefined,
    width: '100%',
    aspectRatio: 0.998,
    zIndex: 1,
    objectFit: 'cover',
  },
  Userlogo: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: RFPercentage(100),
    resizeMode: 'cover',
  },
  Logo: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: RFValue(36),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(36),
    borderRadius: RFValue(50),
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginText: {
    fontFamily: 'HvDTrial_Brandon_Grotesque_black-BF64a625c944b08',
    fontSize: RFPercentage(3),
    color: 'white',
  },
  search_content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(10),
    marginTop: RFValue(10),
  },
  bgContainer: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
    zIndex: 1,
  },
  searchButton: {
    flex: 0.8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: RFValue(48),
    height: RFValue(48),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(25),
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
  },
});

export default HeaderStyle;
