const sum = (arr) => {
  // get arr contain only intergers value
  const arrIntergers = arr.filter((value) => Number.isInteger(value));

  // Sort  desc
  arrIntergers.sort((a, b) => b - a);

  // check value
  if (arrIntergers.length == 0) {
    console.log("This arr don't have any intergers value");
    return null;
  } else if (arrIntergers.length < 2) {
    return arrIntergers[0];
  }

  return arrIntergers[0] + arrIntergers[1];
};

const testCases = [
  {
    data: [1, 2, 3, 4, 5],
    expected: 9,
  },
  {
    data: [1, 2.2, 3.3, "4", 5],
    expected: 6,
  },
  {
    data: [null, "2", 3.5, 4, 5],
    expected: 9,
  },
  {
    data: ["1", "2", null, 3],
    expected: 3,
  },
  {
    data: ["1", "2"],
    expected: null,
  },
];

// Run all testcase
testCases.forEach(({ data, expected }, index) => {
  const result = sum(data);
  console.log(
    `===================TESECASE ${index + 1}========================`
  );
  const notice =
    result === expected
      ? `Result: ${result} equal to expected : ${expected}`
      : `Result is ${result} not equal to expected : ${expected}`;
  console.log(notice);
});
