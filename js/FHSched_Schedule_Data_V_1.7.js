var data = [{
  "normalSchedule":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 28},
    "passingPeriodOne": {"SHours": 8, "SMin": 28, "EHours": 8, "EMin": 35},
    "periodTwo": {"SHours": 8, "SMin": 35, "EHours": 9, "EMin": 28},
    "passingPeriodTwo": {"SHours": 9, "SMin": 28, "EHours": 9, "EMin": 35},
    "periodThree": {"SHours": 9, "SMin": 35, "EHours": 10, "EMin": 28},
    "passingPeriodThree": {"SHours": 10, "SMin": 28, "EHours": 10, "EMin": 35},
    "lunch":
    {
      "SHours": 10, "SMin": 35, "EHours": 11, "EMin": 58,
      "aLunch": {"SHours": 10, "SMin": 35, "EHours": 10, "EMin": 58},
      "passingALunch": {"SHours": 10, "SMin": 58, "EHours": 11, "EMin": 5},
      "bLunch": {"SHours": 11, "SMin": 5, "EHours": 11, "EMin": 28},
      "passingBLunch": {"SHours": 11, "SMin": 28, "EHours": 11, "EMin": 35},
      "cLunch": {"SHours": 11, "SMin": 35, "EHours": 11, "EMin": 58},
    },
    "passingCLunch": {"SHours": 11, "SMin": 58, "EHours": 12, "EMin": 5},
    "periodFive": {"SHours": 12, "SMin": 5, "EHours": 12, "EMin": 57},
    "passingPeriodFive": {"SHours": 12, "SMin": 57, "EHours": 13, "EMin": 4},
    "periodSix": {"SHours": 13, "SMin": 4, "EHours": 13, "EMin": 56},
    "passingPeriodSix": {"SHours": 13, "SMin": 56, "EHours": 14, "EMin": 3},
    "periodSeven": {"SHours": 14, "SMin": 3, "EHours": 14, "EMin": 55}
  },
  "releaseAndSmartSchedule":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 15},
    "passingPeriodOne": {"SHours": 8, "SMin": 15, "EHours": 8, "EMin": 22},
    "periodTwo": {"SHours": 8, "SMin": 22, "EHours": 9, "EMin": 2},
    "passingPeriodTwo": {"SHours": 9, "SMin": 2, "EHours": 9, "EMin": 9},
    "periodThree": {"SHours": 9, "SMin": 9, "EHours": 9, "EMin": 49},
    "passingPeriodThree": {"SHours": 9, "SMin": 49, "EHours": 9, "EMin": 56},
    "periodSmart": {"SHours": 9, "SMin": 56, "EHours": 10, "EMin": 44},
    "passingPeriodSmart": {"SHours": 10, "SMin": 44, "EHours": 10, "EMin": 51},
    "lunch":
    {
      "SHours": 10, "SMin": 51, "EHours": 12, "EMin": 14,
      "aLunch": {"SHours": 10, "SMin": 51, "EHours": 11, "EMin": 14},
      "passingALunch": {"SHours": 11, "SMin": 14, "EHours": 11, "EMin": 21},
      "bLunch": {"SHours": 11, "SMin": 21, "EHours": 11, "EMin": 44},
      "passingBLunch": {"SHours": 11, "SMin": 44, "EHours": 11, "EMin": 51},
      "cLunch": {"SHours": 11, "SMin": 51, "EHours": 12, "EMin": 14},
    },
    "passingCLunch": {"SHours": 12, "SMin": 14, "EHours": 12, "EMin": 21},
    "periodFive": {"SHours": 12, "SMin": 21, "EHours": 13, "EMin": 1},
    "passingPeriodFive": {"SHours": 13, "SMin": 1, "EHours": 13, "EMin": 8},
    "periodSix": {"SHours": 13, "SMin": 8, "EHours": 13, "EMin": 48},
    "passingPeriodSix": {"SHours": 13, "SMin": 48, "EHours": 13, "EMin": 55},
    "periodSeven": {"SHours": 13, "SMin": 55, "EHours": 14, "EMin": 35}
  },
  "twoHrSchedule":
  {
    "passingPeriodZero": {"SHours": 9, "SMin": 28, "EHours": 9, "EMin": 35},
    "periodOne": {"SHours": 9, "SMin": 35, "EHours": 10, "EMin": 8},
    "passingPeriodOne": {"SHours": 10, "SMin": 8, "EHours": 10, "EMin": 15},
    "periodTwo": {"SHours": 10, "SMin": 15, "EHours": 10, "EMin": 47},
    "passingPeriodTwo": {"SHours": 10, "SMin": 47, "EHours": 10, "EMin": 54},
    "periodThree": {"SHours": 10, "SMin": 54, "EHours": 11, "EMin": 26},
    "passingPeriodThree": {"SHours": 11, "SMin": 26, "EHours": 11, "EMin": 33},
    "periodFour":
    {
      "SHours": 11, "SMin": 33, "EHours": 12, "EMin": 26, "aLunch": {"aLSHours": 11, "aLSMin": 26, "aLEHours": 11, "aLEMin": 56, "ASHours": 12, "ASmin": 3}, "bLunch": {"BSHours": 11, "BSmin": 33, "bLSHours": 11, "bLSMin": 56, "bLEHours": 12, "bLEMin": 26}, "cLunch": {"cLSHours": 12, "cLSMin": 26, "cLEHours": 12, "cLEMin": 56}
    },
    "passingPeriodFive": {"SHours": 12, "SMin": 56, "EHours": 13, "EMin": 3},
    "periodFive": {"SHours": 13, "SMin": 3, "EHours": 13, "EMin": 35},
    "passingPeriodSix": {"SHours": 14, "SMin": 15, "EHours": 14, "EMin": 55},
    "periodSix": {"SHours": 13, "SMin": 42, "EHours": 14, "EMin": 15},
    "passingPeriodSeven": {"SHours": 14, "SMin": 15, "EHours": 14, "EMin": 22},
    "periodSeven": {"SHours": 14, "SMin": 22, "EHours": 14, "EMin": 55}
  },
  "noSmartEarly":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 24},
    "passingPeriodOne": {"SHours": 8, "SMin": 24, "EHours": 8, "EMin": 31},
    "periodTwo": {"SHours": 8, "SMin": 31, "EHours": 9, "EMin": 20},
    "passingPeriodTwo": {"SHours": 9, "SMin": 20, "EHours": 9, "EMin": 27},
    "periodThree": {"SHours": 9, "SMin": 27, "EHours": 10, "EMin": 16},
    "passingPeriodThree": {"SHours": 10, "SMin": 16, "EHours": 10, "EMin": 23},
    "periodFour":
    {
      "SHours": 10, "SMin": 23, "EHours": 11, "EMin": 46, "aLunch": {"aLSHours": 10, "aLSMin": 16, "aLEHours": 10, "aLEMin": 46, "ASHours": 11, "ASmin": 23}, "bLunch": {"BSHours": 10, "BSmin": 23, "bLSHours": 10, "bLSMin": 46, "bLEHours": 11, "bLEMin": 16}, "cLunch": {"cLSHours": 10, "cLSMin": 22, "cLEHours": 11, "cLEMin": 16}
    },
    "passingPeriodFour": {"SHours": 11, "SMin": 46, "EHours": 11, "EMin": 53},
    "periodFive": {"SHours": 11, "SMin": 53, "EHours": 12, "EMin": 42},
    "passingPeriodFive": {"SHours": 12, "SMin": 42, "EHours": 12, "EMin": 49},
    "periodSix": {"SHours": 12, "SMin": 49, "EHours": 13, "EMin": 38},
    "passingPeriodSix": {"SHours": 13, "SMin": 38, "EHours": 13, "EMin": 45},
    "periodSeven": {"SHours": 13, "SMin": 45, "EHours": 14, "EMin": 35}
  },
  "twoHrErSchedule":
  {
    "passingPeriodZero": {"SHours": 9, "SMin": 28, "EHours": 9, "EMin": 35},
    "periodOne": {"SHours": 9, "SMin": 35, "EHours": 10, "EMin": 4},
    "passingPeriodOne": {"SHours": 10, "SMin": 4, "EHours": 10, "EMin": 11},
    "periodTwo": {"SHours": 10, "SMin": 11, "EHours": 10, "EMin": 40},
    "passingPeriodTwo": {"SHours": 10, "SMin": 40, "EHours": 10, "EMin": 47},
    "periodThree": {"SHours": 10, "SMin": 47, "EHours": 11, "EMin": 16},
    "passingPeriodThree": {"SHours": 11, "SMin": 16, "EHours": 11, "EMin": 23},
    "periodFour":
    {
      "SHours": 11, "SMin": 23, "EHours": 12, "EMin": 46, "aLunch": {"aLSHours": 11, "aLSMin": 16, "aLEHours": 11, "aLEMin": 46, "ASHours": 11, "ASmin": 53}, "bLunch": {"BSHours": 11, "BSmin": 23, "bLSHours": 11, "bLSMin": 46, "bLEHours": 12, "bLEMin": 16}, "cLunch": {"CSHours": 11, "CSMin": 23, "cLSHours": 12, "cLSMin": 26, "cLEHours": 12, "cLEMin": 56}
    },
    "periodFive": {"SHours": 12, "SMin": 53, "EHours": 13, "EMin": 22},
    "passingPeriodFive": {"SHours": 13, "SMin": 22, "EHours": 13, "EMin": 29},
    "periodSix": {"SHours": 13, "SMin": 29, "EHours": 13, "EMin": 58},
    "passingPeriodSix": {"SHours": 13, "SMin": 58, "EHours": 14, "EMin": 5},
    "periodSeven": {"SHours": 14, "SMin": 5, "EHours": 14, "EMin": 35}
  },
  "PMAssem":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 17},
    "passingPeriodOne": {"SHours": 8, "SMin": 17, "EHours": 8, "EMin": 24},
    "periodTwo": {"SHours": 8, "SMin": 24, "EHours": 9, "EMin": 5},
    "passingPeriodTwo": {"SHours": 9, "SMin": 5, "EHours": 9, "EMin": 12},
    "periodThree": {"SHours": 9, "SMin": 12, "EHours": 9, "EMin": 53},
    "passingPeriodThree": {"SHours": 9, "SMin": 53, "EHours": 10, "EMin": 0},
    "periodFour":
    {
      "SHours": 10, "SMin": 0, "EHours": 11, "EMin": 23, "aLunch": {"aLSHours": 9, "aLSMin": 53, "aLEHours": 10, "aLEMin": 23, "ASHours": 10, "ASmin": 30}, "bLunch": {"BSHours": 10, "BSmin": 0, "bLSHours": 10, "bLSMin": 23, "bLEHours": 10, "bLEMin": 53}, "cLunch": {"cLSHours": 10, "cLSMin": 53, "cLEHours": 11, "cLEMin": 23}
    },
    "periodFive": {"SHours": 11, "SMin": 30, "EHours": 12, "EMin": 11},
    "passingPeriodFive": {"SHours": 12, "SMin": 11, "EHours": 12, "EMin": 18},
    "periodSix": {"SHours": 12, "SMin": 18, "EHours": 13, "EMin": 0},
    "passingPeriodSix": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 7},
    "periodSeven": {"SHours": 13, "SMin": 7, "EHours": 13, "EMin": 48},
    "passingPeriodSeven": {"SHours": 13, "SMin": 48, "EHours": 13, "EMin": 55},
    "pepSession": {"SHours": 13, "SMin": 55, "EHours": 14, "EMin": 55}
  },
  "smartNoEarly":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 19},
    "passingPeriodOne": {"SHours": 8, "SMin": 19, "EHours": 8, "EMin": 26},
    "periodTwo": {"SHours": 8, "SMin": 26, "EHours": 9, "EMin": 10},
    "passingPeriodTwo": {"SHours": 9, "SMin": 10, "EHours": 9, "EMin": 17},
    "periodThree": {"SHours": 9, "SMin": 17, "EHours": 10, "EMin": 0},
    "passingPeriodThree": {"SHours": 10, "SMin": 0, "EHours": 10, "EMin": 7},
    "periodSmart": {"SHours": 10, "SMin": 7, "EHours": 10, "EMin": 55},
    "passingPeriodSmart": {"SHours": 10, "SMin": 55, "EHours": 11, "EMin": 2},
    "aLunch": {"SHours": 11, "SMin": 2, "EHours": 11, "EMin": 25},
    "passingALunch": {"SHours": 11, "SMin": 25, "EHours": 11, "EMin": 32},
    "bLunch": {"SHours": 11, "SMin": 32, "EHours": 11, "EMin": 55},
    "passingBLunch": {"SHours": 11, "SMin": 55, "EHours": 12, "EMin": 2},
    "cLunch": {"SHours": 12, "SMin": 2, "EHours": 12, "EMin": 25},
    "passingCLunch": {"SHours": 12, "SMin": 25, "EHours": 12, "EMin": 32},
    "periodFive": {"SHours": 12, "SMin": 32, "EHours": 13, "EMin": 15},
    "passingPeriodFive": {"SHours": 13, "SMin": 15, "EHours": 13, "EMin": 22},
    "periodSix": {"SHours": 13, "SMin": 22, "EHours": 14, "EMin": 5},
    "passingPeriodSix": {"SHours": 14, "SMin": 5, "EHours": 14, "EMin": 12},
    "periodSeven": {"SHours": 14, "SMin": 12, "EHours": 14, "EMin": 55}
  },
  "seventhPeriodFinal":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodOne": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 17},
    "passingPeriodOne": {"SHours": 8, "SMin": 17, "EHours": 8, "EMin": 24},
    "periodTwo": {"SHours": 8, "SMin": 24, "EHours": 9, "EMin": 5},
    "passingPeriodTwo": {"SHours": 9, "SMin": 5, "EHours": 9, "EMin": 12},
    "periodThree": {"SHours": 9, "SMin": 12, "EHours": 9, "EMin": 53},
    "passingPeriodThree": {"SHours": 9, "SMin": 53, "EHours": 10, "EMin": 0},
    "periodFour": {"SHours": 10, "SMin": 0, "EHours": 11, "EMin": 23},
    "passingPeriodFour": {"SHours": 11, "SMin": 23, "EHours": 11, "EMin": 30},
    "periodFive": {"SHours": 11, "SMin": 30, "EHours": 12, "EMin": 11},
    "passingPeriodFive": {"SHours": 12, "SMin": 11, "EHours": 12, "EMin": 18},
    "periodSix": {"SHours": 12, "SMin": 18, "EHours": 13, "EMin": 0},
    "passingPeriodSix": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 7},
    "periodSevenExam": {"SHours": 13, "SMin": 7, "EHours": 14, "EMin": 55}
  },
  "finalsWeekFirst":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodSmart": {"SHours": 7, "SMin": 35, "EHours": 11, "EMin": 0},
    "passingPeriodSmart": {"SHours": 11, "SMin": 0, "EHours": 11, "EMin": 15},
    "periodOneExam": {"SHours": 11, "SMin": 15, "EHours": 13, "EMin": 0},
    "passingPeriodOne": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 10},
    "periodTwoExam": {"SHours": 13, "SMin": 10, "EHours": 14, "EMin": 55}
  },
  "finalsWeekSecond":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodSmart": {"SHours": 7, "SMin": 35, "EHours": 11, "EMin": 0},
    "passingPeriodSmart": {"SHours": 11, "SMin": 0, "EHours": 11, "EMin": 15},
    "periodThreeExam": {"SHours": 11, "SMin": 15, "EHours": 13, "EMin": 0},
    "passingPeriodThree": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 10},
    "periodFourExam": {"SHours": 13, "SMin": 10, "EHours": 14, "EMin": 55}
  },
  "finalsWeekThird":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodSmart": {"SHours": 7, "SMin": 35, "EHours": 11, "EMin": 0},
    "passingPeriodSmart": {"SHours": 11, "SMin": 0, "EHours": 11, "EMin": 15},
    "periodFiveExam": {"SHours": 11, "SMin": 15, "EHours": 13, "EMin": 0},
    "passingPeriodFive": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 10},
    "periodSixExam": {"SHours": 13, "SMin": 10, "EHours": 14, "EMin": 55}
  },
  "noSchool":
  {
    "passingPeriodZero": {"SHours": 0, "SMin": 0, "EHours": 0, "EMin": 0}, "noSchoolPeriod": {"SHours": 0, "SMin": 0, "EHours": 0, "EMin": 0}
  },
  "firstDaySchedule":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodSmart": {"SHours": 7, "SMin": 35, "EHours": 8, "EMin": 15},
    "passingPeriodSmart": {"SHours": 8, "SMin": 15, "EHours": 8, "EMin": 22},
    "periodOne": {"SHours": 8, "SMin": 22, "EHours": 9, "EMin": 6},
    "passingPeriodOne": {"SHours": 9, "SMin": 6, "EHours": 9, "EMin": 13},
    "periodTwo": {"SHours": 9, "SMin": 13, "EHours": 9, "EMin": 57},
    "passingPeriodTwo": {"SHours": 9, "SMin": 57, "EHours": 10, "EMin": 4},
    "periodThree": {"SHours": 10, "SMin": 4, "EHours": 10, "EMin": 48},
    "passingPeriodThree": {"SHours": 10, "SMin": 48, "EHours": 10, "EMin": 55},
    "periodFour":
    {
      "SHours": 10, "SMin": 55, "EHours": 12, "EMin": 18, "aLunch": {"aLSHours": 10, "aLSMin": 48, "aLEHours": 11, "aLEMin": 18, "ASHours": 11, "ASmin": 25}, "bLunch": {"BSHours": 11, "BSmin": 0, "bLSHours": 10, "bLSMin": 23, "bLEHours": 10, "bLEMin": 53}, "cLunch": {"cLSHours": 10, "cLSMin": 53, "cLEHours": 11, "cLEMin": 23}
    },
    "passingPeriodFour": {"SHours": 12, "SMin": 18, "EHours": 12, "EMin": 25},
    "periodFive": {"SHours": 12, "SMin": 25, "EHours": 13, "EMin": 8},
    "passingPeriodFive": {"SHours": 13, "SMin": 8, "EHours": 13, "EMin": 15},
    "periodSix": {"SHours": 13, "SMin": 15, "EHours": 13, "EMin": 58},
    "passingPeriodSix": {"SHours": 13, "SMin": 58, "EHours": 14, "EMin": 5},
    "periodSeven": {"SHours": 14, "SMin": 5, "EHours": 14, "EMin": 55}
  },
  "secondDaySchedule":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 28, "EHours": 7, "EMin": 35},
    "periodSmart": {"SHours": 7, "SMin": 35, "EHours": 7, "EMin": 55},
    "passingPeriodSmart": {"SHours": 7, "SMin": 55, "EHours": 8, "EMin": 2},
    "periodOne": {"SHours": 8, "SMin": 2, "EHours": 8, "EMin": 50},
    "passingPeriodOne": {"SHours": 8, "SMin": 50, "EHours": 8, "EMin": 57},
    "periodTwo": {"SHours": 8, "SMin": 57, "EHours": 9, "EMin": 45},
    "passingPeriodTwo": {"SHours": 9, "SMin": 45, "EHours": 9, "EMin": 52},
    "periodThree": {"SHours": 9, "SMin": 52, "EHours": 10, "EMin": 40},
    "passingPeriodThree": {"SHours": 10, "SMin": 40, "EHours": 10, "EMin": 47},
    "periodFour": {"SHours": 10, "SMin": 47, "EHours": 12, "EMin": 10},
    "passingPeriodFour": {"SHours": 12, "SMin": 10, "EHours": 12, "EMin": 17},
    "periodFive": {"SHours": 12, "SMin": 17, "EHours": 13, "EMin": 5},
    "passingPeriodFive": {"SHours": 13, "SMin": 5, "EHours": 13, "EMin": 12},
    "periodSix": {"SHours": 13, "SMin": 12, "EHours": 14, "EMin": 0},
    "passingPeriodSix": {"SHours": 14, "SMin": 0, "EHours": 14, "EMin": 7},
    "periodSeven": {"SHours": 14, "SMin": 7, "EHours": 14, "EMin": 55}
  },
  "orientationSchedule":
  {
    "passingPeriodZero": {"SHours": 7, "SMin": 23, "EHours": 7, "EMin": 30},
    "freshman": {"SHours": 7, "SMin": 30, "EHours": 9, "EMin": 30},
    "passingFreshman": {"SHours": 9, "SMin": 30, "EHours": 9, "EMin": 30},
    "freshmanAndSenior": {"SHours": 9, "SMin": 30, "EHours": 11, "EMin": 0},
    "passingFreshmanAndSenior": {"SHours": 11, "SMin": 0, "EHours": 11, "EMin": 0},
    "senior": {"SHours": 11, "SMin": 0, "EHours": 12, "EMin": 0},
    "passingSenior": {"SHours": 12, "SMin": 0, "EHours": 12, "EMin": 0},
    "periodLunch": {"SHours": 12, "SMin": 0, "EHours": 13, "EMin": 0},
    "passingPeriodLunch": {"SHours": 13, "SMin": 0, "EHours": 13, "EMin": 0},
    "sophomore": {"SHours": 13, "SMin": 0, "EHours": 15, "EMin": 0},
    "passingSophomore": {"SHours": 15, "SMin": 0, "EHours": 15, "EMin": 0},
    "sophomoreAndJunior": {"SHours": 15, "SMin": 0, "EHours": 15, "EMin": 30},
    "passingSophomoreAndJunior": {"SHours": 15, "SMin": 30, "EHours": 15, "EMin": 30},
    "junior": {"SHours": 15, "SMin": 30, "EHours": 17, "EMin": 30},
    "passingJunior": {"SHours": 17, "SMin": 30, "EHours": 17, "EMin": 30},
    "lateRegistration": {"SHours": 17, "SMin": 30, "EHours": 19, "EMin": 0}
  },
  "autonomousFestival":
  {
    "passingPeriodZero": {"SHours": 9, "SMin": 0, "EHours": 9, "EMin": 0},
    "autonomousPeriod": {"SHours": 9, "SMin": 0, "EHours": 10, "EMin": 0},
    "passingPeriodOne": {"SHours": 10, "SMin": 0, "EHours": 10, "EMin": 0},
    "techDemoPeriod": {"SHours": 10, "SMin": 0, "EHours": 16, "EMin": 0}
  },
  "test":
  {
    "passingPeriodZero": {"SHours": 9, "SMin": 0, "EHours": 9, "EMin": 0},
    "lunch":
    {
      "SHours": 10, "SMin": 35, "EHours": 11, "EMin": 58,
      "aLunch": {"SHours": 10, "SMin": 35, "EHours": 10, "EMin": 58},
      "passingALunch": {"SHours": 10, "SMin": 58, "EHours": 11, "EMin": 5},
      "bLunch": {"SHours": 11, "SMin": 5, "EHours": 11, "EMin": 28},
      "passingBLunch": {"SHours": 11, "SMin": 28, "EHours": 11, "EMin": 35},
      "cLunch": {"SHours": 11, "SMin": 35, "EHours": 11, "EMin": 58},
    }
  }
}];
