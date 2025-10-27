import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import dayjs from "dayjs";
import { dotColor1, dotColor2 } from "../utils/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const dayHeight = windowWidth / 9;
const dayWidth = windowWidth / 7;
const dayRoundSize = dayWidth - 20;

export default function Day({
  day,
  isCalMonth,
  weekCount,
  selectedDate,
  setSelectedDate,
  markedContents,
}) {
  const isSelected =
    selectedDate.format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
  const dayStyle = [
    styles.dayStyle,
    !isCalMonth && styles.isNotCalMonth,
    { height: weekCount === 5 ? (dayHeight * 6) / 5 : dayHeight },
  ];
  const dayTextStyle = [
    styles.dayTextStyle,
    day.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD") && styles.nowDate,
  ];
  const selectedDateRoundStyle = [
    isSelected && styles.selectedDateRound,
    styles.dayRound,
  ];

  const Dots = ({ content, color }) => {
    return <View style={[styles.dotStyle, { backgroundColor: color }]}></View>;
  };
  const Period = ({ contents }) => {
    const style = [
      styles.periodStyle,
      contents?.startingDay && { left: 2 },
      contents?.endingDay && { right: 2 },
      { backgroundColor: contents.color },
    ];
    return <View style={style}></View>;
  };

  return (
    <Pressable style={dayStyle} onPress={() => setSelectedDate(day)}>
      <View style={selectedDateRoundStyle}>
        <Text style={dayTextStyle}>{day.format("D")}</Text>
        <View style={styles.dotsListContainer}>
          <FlatList
            style={styles.dotsContainer}
            data={markedContents?.schedules}
            renderItem={({ item, index }) => (
              <Dots content={item} key={index} color={dotColor1} />
            )}
          />
          <FlatList
            style={styles.dotsContainer}
            data={markedContents?.todos}
            renderItem={({ item, index }) => (
              <Dots content={item} key={index} color={dotColor2} />
            )}
          />
        </View>
      </View>
      <FlatList
        style={styles.periodsContainer}
        data={markedContents?.periods}
        renderItem={({ item, index }) => <Period contents={item} key={index} />}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dayStyle: {
    width: dayWidth,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  dayTextStyle: {
    color: "#3a3a3a",
    fontWeight: 500,
  },
  isNotCalMonth: {
    opacity: 0.25,
  },
  nowDate: {
    color: "#000",
    fontWeight: 900,
  },
  dayRound: {
    width: dayRoundSize,
    height: dayRoundSize,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDateRound: {
    width: dayRoundSize,
    height: dayRoundSize,
    borderRadius: 15,
    backgroundColor: "#6d6d6d33",
    // borderColor: "#97979785",
    // borderWidth: 2,
  },
  dotsListContainer: {
    flexDirection: "row",
    width: dayWidth - 20,
    justifyContent: "center",
  },
  dotsContainer: {
    flexDirection: "row",
  },
  dotStyle: {
    marginHorizontal: 2,
    width: 5,
    height: 5,
    borderRadius: 5,
  },
  periodsContainer: {
    height: 15,
    flexDirection: "column",
  },
  periodStyle: {
    width: dayWidth + 4,
    height: 5,
    borderRadius: 5,
  },
});
