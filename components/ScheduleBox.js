import { View, Text, StyleSheet } from "react-native";
import dump_contents from "../dump/dump_contents";
import { dotColor2 } from "../utils/colors";

function ScheduleBox({ content }) {
  const nowContent = dump_contents.schedules.find(
    ({ contentId }) => contentId === content.contentId
  );
  return (
    <View style={styles.schBoxContainer}>
      <Text style={styles.schText}>{nowContent.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  schBoxContainer: {
    width: 150,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: dotColor2,
  },
  schText: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});
export default ScheduleBox;
