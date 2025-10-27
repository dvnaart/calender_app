import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Pressable,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ScheduleBox from "./ScheduleBox";

function ScheduleList({ schContents }) {
  return (
    <View style={styles.schListContainer}>
      <FlatList
        data={schContents}
        renderItem={({ item, index }) => (
          <ScheduleBox content={item} key={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  schListContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ScheduleList;
