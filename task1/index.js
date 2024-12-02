const data = ["a", "abc", "ab", "c", "bb", "cc", "dd"];
const data2 = ["a", "abc", "ab", "c", "bb", "d", "dd"];

const test = (arr) => {
  // get arr contain length of each value
  const lengths = arr.map((value) => value.length);

  // Object will contain key is length and value is total of appearance
  const totalAppear = {};

  lengths.forEach((value) => {
    totalAppear[value] = (totalAppear[value] || 0) + 1;
  });

  const keys = Object.keys(totalAppear);
  let maxKey = keys[0];

  for (const value of keys) {
    if (totalAppear[value] >= totalAppear[maxKey]) maxKey = value;
  }

  const result = arr.filter((value) => value.length === Number(maxKey));

  return result;
};

const testCases = [
  ["a", "abc", "ab", "c", "bb", "cc", "dd"],
  ["abc", "def", "a", "b", "c", "de"],
  ["a", "abc", "ab", "c", "bb", "cc", "ee"],
];

testCases.forEach((testCase) => {
  console.log(test(testCase));
});
