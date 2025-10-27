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
import TodoBox from "./TodoBox";

function TodoList({ todoContents }) {
  return (
    <View style={styles.todoListContainer}>
      <FlatList
        data={todoContents}
        renderItem={({ item, index }) => <TodoBox content={item} key={index} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default TodoList;
