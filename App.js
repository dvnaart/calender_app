import { StyleSheet, SafeAreaView, StatusBar, Text, View } from "react-native";
import MainScreenCustom from "./screens/MainScreenCustom";

export default function App() {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <StatusBar barStyle="ligth-content" />
      <MainScreenCustom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
  },
});
