import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PeriodList from "./PeriodList";
import ScheduleList from "./ScheduleList";
import TodoList from "./TodoList";

function Bottom({ selectedDate, markedContent }) {
  return (
    <>
      <View style={styles.bttmListNav}>
        <View style={styles.bttmListNavLeft}>
          <Text>left</Text>
        </View>
        <View style={styles.bttmListNavRight}>
          <Text>right</Text>
        </View>
      </View>
      <PeriodList periodContents={markedContent?.periods} />
      <View style={styles.bttmListMain}>
        <ScheduleList
          selectedDate={selectedDate}
          schContents={markedContent?.schedules}
        />
        <TodoList
          selectedDate={selectedDate}
          todoContents={markedContent?.todos}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bttmListNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bttmListNavLeft: {
    marginLeft: 10,
  },
  bttmListNavRight: {
    marginRight: 10,
  },
  bttmListMain: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
  },
});

export default Bottom;
