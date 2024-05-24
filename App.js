import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {PaperProvider} from 'react-native-paper';
import Home from './Screens/Home';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#a224be');
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBackgroundColor('#ffffff');
      StatusBar.setBarStyle('dark-content');
    };
  }, []);
  return (
    <PaperProvider>
      <AlertNotificationRoot
        toastConfig={{
          textBodyStyle: {
            fontFamily: 'HvDTrial_Brandon_Grotesque_bold-BF64a625c9151d5',
            fontSize: RFPercentage(2),
          },
        }}>
        <Home />
      </AlertNotificationRoot>
    </PaperProvider>
  );
};

export default App;
