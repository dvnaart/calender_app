import { View, Text, StyleSheet } from "react-native";
import dump_contents from "../dump/dump_contents";
import { dotColor1 } from "../utils/colors";

function TodoBox({ content }) {
  const nowContent = dump_contents.todos.find(
    ({ contentId }) => contentId === content.contentId
  );

  return (
    <View style={styles.todoBoxContainer}>
      <Text style={styles.todoText}>{nowContent.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  todoBoxContainer: {
    width: 150,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: dotColor1,
  },
  todoText: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});
export default TodoBox;
