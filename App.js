import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapWindow from "./components/MapWindow";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

export default function App() {
  return (
    <View style={st.container}>
      <Text>Hexagon Map</Text>
        <View  style={st.zoomWindow}>
            <ReactNativeZoomableView
                bindToBorders={false}>
                <MapWindow></MapWindow>
            </ReactNativeZoomableView>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
    zoomWindow: {
      borderWidth: 2,
        flex: 1,
    }
});
