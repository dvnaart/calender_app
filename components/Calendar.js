import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { getMonth } from "../utils/daysMatrix";
import dayjs from "dayjs";
import Day from "./Day";
import Icon from "react-native-vector-icons/Ionicons";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Calendar({
  style,
  calDate,
  setCalDate,
  selectedDate,
  setSelectedDate,
  markedDates,
}) {
  const [currentMonth, setCurrentMonth] = useState(
    getMonth(calDate.year(), calDate.month())
  );

  useEffect(() => {
    setCurrentMonth(getMonth(calDate.year(), calDate.month()));
  }, [calDate]);

  function prevMonth() {
    setCalDate((c) => c.subtract(1, "month"));
  }

  function nextMonth() {
    setCalDate((c) => c.add(1, "month"));
  }

  return (
    <View style={style}>
      <View style={styles.calHeader}>
        <Pressable onPress={prevMonth} style={styles.changeMonthIcon}>
          <Icon name="chevron-back-outline" size={18}></Icon>
        </Pressable>
        <Text style={styles.calDateText}>{calDate.format("MMM YYYY")}</Text>
        <Pressable onPress={nextMonth} style={styles.changeMonthIcon}>
          <Icon name="chevron-forward-outline" size={18}></Icon>
        </Pressable>
      </View>
      <FlatList
        style={styles.weekDays}
        data={weekDays}
        numColumns={7}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.weekDaysTextContainer}>
            <Text style={styles.weekDaysText}>{item}</Text>
          </View>
        )}
      />
      <FlatList
        data={currentMonth.daysMatrix.slice(0, currentMonth.weekCount)}
        renderItem={({ item, index }) => (
          <FlatList
            style={styles.week}
            data={item}
            key={index}
            renderItem={({ item, index }) => (
              <Day
                key={index}
                day={item}
                isCalMonth={calDate.month() === item.month()}
                weekCount={currentMonth.weekCount}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                markedContents={markedDates[item.format("YYYY-MM-DD")]}
              />
            )}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  calHeader: {
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  changeMonthIcon: {
    paddingHorizontal: 8,
  },
  calDateText: {
    fontSize: 17,
    fontWeight: 600,
  },
  weekDaysTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width / 7,
  },
  weekDaysText: {
    color: "gray",
  },
  week: {
    flexDirection: "row",
  },
});
export default Calendar;
