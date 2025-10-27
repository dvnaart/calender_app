import { periodColor1, periodColor2, periodColor3 } from "../utils/colors";

export default markedDates = {
  "2023-05-02": {
    periods: [
      {
        contentId: 1,
        startingDay: true,
        endingDay: false,
        color: periodColor1,
      },
      {
        contentId: 2,
        startingDay: true,
        endingDay: false,
        color: periodColor2,
      },
    ],
  },
  "2023-05-03": {
    periods: [
      {
        contentId: 1,
        startingDay: false,
        endingDay: false,
        color: periodColor1,
      },
      {
        contentId: 2,
        startingDay: false,
        endingDay: true,
        color: periodColor2,
      },
      {
        contentId: 3,
        startingDay: true,
        endingDay: false,
        color: periodColor3,
      },
    ],
  },
  "2023-05-04": {
    periods: [
      {
        contentId: 1,
        startingDay: false,
        endingDay: true,
        color: periodColor1,
      },
      { color: "transparent" },
      {
        contentId: 3,
        startingDay: false,
        endingDay: false,
        color: periodColor3,
      },
    ],
    schedules: [{ contentId: 10, start: "07:30", end: "11:00" }],
    todos: [
      { contentId: 20, part: false },
      { contentId: 21, part: true, start: "08:30", end: "10:00" },
    ],
  },
  "2023-05-05": {
    periods: [
      { color: "transparent" },
      { color: "transparent" },
      {
        contentId: 3,
        startingDay: false,
        endingDay: true,
        color: periodColor3,
      },
    ],
  },
};
