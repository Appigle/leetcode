const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let [start, end] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    if (currentStart <= end) {
      end = Math.max(end, currentEnd);
    } else {
      result.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }
  result.push([start, end]);
  return result;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge2 = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const lastItemInResult = result[result.length - 1];
    const current = intervals[i];
    if (current[0] > lastItemInResult[1]) {
      result.push(current);
    } else {
      lastItemInResult[1] = Math.max(lastItemInResult[1], current[1]);
    }
  }
  return result;
};
