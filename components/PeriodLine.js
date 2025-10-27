import { View, Text, StyleSheet } from "react-native";
import dump_contents from "../dump/dump_contents";
import { dotColor1 } from "../utils/colors";

function PeriodLine({ content }) {
  const nowContent = dump_contents.periods.find(
    ({ contentId }) => contentId === content.contentId
  );
  return (
    content?.contentId && (
      <View
        style={[styles.periodBoxContainer, { backgroundColor: content.color }]}
      >
        <Text style={styles.periodText}>{nowContent.title}</Text>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  periodBoxContainer: {
    marginVertical: 1,
  },
  periodText: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: "white",
  },
});
export default PeriodLine;
