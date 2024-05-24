import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const LeaderBoardStyle = StyleSheet.create({
  userName: {
    fontFamily: 'HvDTrial_Brandon_Grotesque_bold-BF64a625c9151d5',
    fontSize: RFPercentage(2.4),
    color: 'white',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    marginVertical: RFValue(12),
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(12),
    borderRadius: RFValue(40),
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerRow: {
    backgroundColor: 'transparent',
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(10),
    borderRadius: RFValue(40),
    marginBottom: RFValue(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemData: {
    flex: 1,
    color: 'white',
    fontFamily: 'HvDTrial_Brandon_Grotesque_bold-BF64a625c9151d5',
    fontSize: RFPercentage(2.2),
    textAlign: 'center',
  },
});

export default LeaderBoardStyle;
