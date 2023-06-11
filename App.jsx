import { StatusBar } from 'expo-status-bar';
import * as ReactNative from 'react-native';

export default function App() {
  return (
    <ReactNative.View style={styles.container}>

      <ReactNative.View style={styles.textConatiner}>
      <ReactNative.Text style={styles.text}>
        Open up App.js to start working on your app
      </ReactNative.Text>
      </ReactNative.View>

      <ReactNative.TouchableOpacity onPress={() => ReactNative.Linking.openURL('https://youtube.com')}>
        <ReactNative.Text style={styles.link}>YouTube</ReactNative.Text>
      </ReactNative.TouchableOpacity>
      <StatusBar style="auto" />
    </ReactNative.View>
  );
}

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
    
  },
  text: {
    color: 'blue',
    fontSize: 16,
  },
  textConatiner: {
    backgroundColor: '#454545',
    position: 'relative',
    top: -40,
    padding: 10,
    borderRadius: 15,
  }
});

