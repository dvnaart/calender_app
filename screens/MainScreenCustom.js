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
import React, { useState, useMemo, useCallback } from "react";
import dayjs from "dayjs";
import Calendar from "../components/Calendar";
import Bottom from "../components/Bottom";
import markedDates from "../dump/markedDates";

function MainScreenCustom() {
  const [calDate, setCalDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <View style={styles.screen}>
      <View style={styles.mainContainer}>
        <View style={styles.topNav}></View>
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            calDate={calDate}
            setCalDate={setCalDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            markedDates={markedDates}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Bottom
            selectedDate={selectedDate}
            markedContent={markedDates[selectedDate.format("YYYY-MM-DD")]}
          />
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  topNav: {
    height: 40,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  calendarContainer: {
    backgroundColor: "#ffffff",
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default MainScreenCustom;
