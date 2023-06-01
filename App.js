import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async ()=>{
    return{
      shouldShowAlert:true,
      shouldPlaySound:true

    }
  }
})

export default function App() {

  function sceduleNotificationHandler(){
   Notifications.scheduleNotificationAsync({
    content:{
      title:"my first local notification",
      body:"This is the body of notification",
      date:{userName:"parth"}
    },
    trigger:{
      seconds:5
    }
   })
  }

  return (
    <View style={styles.container}>
      <Text>Local Notification</Text>
      <Button title='scedule notification' onPress={sceduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
