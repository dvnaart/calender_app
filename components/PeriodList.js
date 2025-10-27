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
import PeriodLine from "./PeriodLine";

function PeriodList({ periodContents }) {
  return (
    <View style={styles.periodListContainer}>
      <FlatList
        data={periodContents}
        renderItem={({ item, index }) => (
          <PeriodLine content={item} key={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  periodListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PeriodList;
