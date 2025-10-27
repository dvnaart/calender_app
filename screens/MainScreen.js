import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useMemo, useCallback } from "react";
import { Agenda, Calendar, CalendarUtils } from "react-native-calendars";
import { format, set } from "date-fns";
import { StyleSheet } from "react-native";
import Marking from "react-native-calendars/src/calendar/day/marking";
import BottomTodo from "../components/BottomTodo";

const INITIAL_DATE = "2023-05-06";
const GREEN = "#13ba7d";
const PINK = "#a68a9f";
const RED = "#ba1313";

export default function MainScreen() {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [markingType, setMarkingType] = useState(Marking.markings.MULTI_PERIOD);
  const getDate = (count) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };
  const dotMarks = useMemo(() => {
    return {
      [getDate(1)]: {
        disabled: true,
        dotColor: RED,
        marked: true,
      },
      [getDate(2)]: {
        dotColor: RED,
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: PINK,
        selectedTextColor: RED,
      },
    };
  }, [selected]);

  const multiDotMarks = useMemo(() => {
    let rtn = {
      [INITIAL_DATE]: {
        dots: [
          { key: "vacation", color: "blue", selectedDotColor: RED },
          { key: "massage", color: RED, selectedDotColor: "white" },
        ],
      },
      [getDate(1)]: {
        dots: [
          { key: "vacation", color: GREEN, selectedDotColor: RED },
          { key: "massage", color: RED, selectedDotColor: GREEN },
        ],
      },
    };
    rtn[selected] = {
      ...rtn[selected],
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: "orange",
    };
    return rtn;
  }, [selected]);

  const periodWithDotsMarks = useMemo(() => {
    return {
      [getDate(-3)]: {
        marked: true,
        dotColor: "white",
        startingDay: true,
        endingDay: true,
        color: "#50cebb",
        textColor: "white",
      },
      [INITIAL_DATE]: { marked: true, dotColor: "#50cebb" },
      [getDate(1)]: { disabled: true, marked: true, dotColor: "#50cebb" },
      [getDate(2)]: { startingDay: true, color: "#50cebb", textColor: "white" },
      [getDate(3)]: {
        color: "#70d7c7",
        customTextStyle: {
          color: "#FFFAAA",
          fontWeight: "700",
        },
      },
      [getDate(4)]: {
        color: "#70d7c7",
        textColor: "white",
        marked: true,
        dotColor: "white",
      },
      [getDate(5)]: { color: "#70d7c7", inactive: true },
      [getDate(6)]: {
        endingDay: true,
        color: "#50cebb",
        textColor: "white",
        customContainerStyle: {
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        },
      },
      [getDate(10)]: { inactive: true, disableTouchEvent: true },
    };
  }, []);

  const planerMarks = useMemo(() => {
    let rtn = {
      [INITIAL_DATE]: {
        periods: [
          { startingDay: true, endingDay: false, color: GREEN },
          { startingDay: true, endingDay: false, color: "orange" },
        ],
      },
      [getDate(1)]: {
        periods: [
          { startingDay: false, endingDay: true, color: GREEN },
          { startingDay: false, endingDay: true, color: "orange" },
          { startingDay: true, endingDay: false, color: "pink" },
        ],
      },
      [getDate(5)]: {
        periods: [
          { startingDay: true, endingDay: true, color: "orange" },
          { color: "transparent" },
          { startingDay: false, endingDay: true, color: "pink" },
        ],
      },
    };
    rtn[selected] = {
      ...rtn[selected],
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: "orange",
    };
    return rtn;
  }, [selected]);

  const customMarks = useMemo(() => {
    return {
      [INITIAL_DATE]: {
        customStyles: {
          container: {
            backgroundColor: "white",
            elevation: 2,
          },
          text: {
            color: RED,
            marginTop: 0,
          },
        },
      },
      [getDate(1)]: {
        selected: true,
      },
      [getDate(2)]: {
        customStyles: {
          container: {
            backgroundColor: RED,
            elevation: 4,
          },
          text: {
            color: "white",
          },
        },
      },
      [getDate(3)]: {
        customStyles: {
          container: {
            backgroundColor: GREEN,
          },
          text: {
            color: "white",
          },
        },
      },
      [getDate(4)]: {
        customStyles: {
          container: {
            backgroundColor: "black",
            elevation: 2,
          },
          text: {
            color: "yellow",
          },
        },
      },
      [getDate(5)]: {
        disabled: true,
      },
      [getDate(6)]: {
        customStyles: {
          text: {
            color: "black",
            fontWeight: "bold",
          },
        },
      },
      [getDate(10)]: {
        customStyles: {
          container: {
            backgroundColor: "pink",
            elevation: 4,
            borderColor: "purple",
            borderWidth: 5,
          },
          text: {
            marginTop: 3,
            fontSize: 11,
            color: "black",
          },
        },
      },
      [getDate(11)]: {
        customStyles: {
          container: {
            backgroundColor: "orange",
            borderRadius: 0,
          },
        },
      },
    };
  }, []);

  const markingForType = useCallback(() => {
    switch (markingType) {
      case Marking.markings.DOT:
        return dotMarks;
      case Marking.markings.MULTI_DOT:
        return multiDotMarks;
      case Marking.markings.PERIOD:
        return periodWithDotsMarks; //periodMarks;
      case Marking.markings.MULTI_PERIOD:
        return planerMarks;
      case Marking.markings.CUSTOM:
        return customMarks;
    }
  }, [markingType, selected]);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.topNav}>
          <Pressable onPress={() => setMarkingType(Marking.markings.MULTI_DOT)}>
            <Text>TODO </Text>
          </Pressable>
          <Pressable
            onPress={() => setMarkingType(Marking.markings.MULTI_PERIOD)}
          >
            <Text>PLAN </Text>
          </Pressable>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markingType={markingType}
            markedDates={markingForType()}
            theme={{
              selectedDayBackgroundColor: "#009688",
              arrowColor: "#009688",
              dotColor: "#009688",
              todayTextColor: "#009688",
            }}
            enableSwipeMonths={true}
          />
        </View>
        <View style={styles.bottomNav}>
          <BottomTodo markedDate={markingForType()[selected]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  topNav: {
    height: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  calendarContainer: {
    flex: 1,
  },
  calendar: {
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  bottomNav: {
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
