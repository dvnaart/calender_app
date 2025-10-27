import dayjs from "dayjs";
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

function TimeTable({ selectedDate, markedContent }) {
  // var timeList = [];
  // for (var i = 0; i < 24; i++) {
  //   timeList.push(
  //     dayjs()
  //       .startOf("d")
  //       .add(30 * i, "m")
  //       .format("HH:mm")
  //   );
  // }
  // // const contents = markedContent.reduce(() => {});
  // console.log(selectedDate, markedContent);
  // timeList.forEach((t)=> {
  //   mar
  // })
  // var componentList = [];markedContent?.schedule

  // for (var i = 0; i < 24; i++) {

  // }

  function TimeBlock() {
    return (
      <View>
        <Text>block</Text>
      </View>
    );
  }
  function TimeRow({ t }) {
    return (
      <View>
        <Text>{t}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>TimeTable</Text>
    </View>
  );
}

export default TimeTable;
