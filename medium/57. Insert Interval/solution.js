const insert = (intervals, newInterval) => {
  const result = [];
  let [start, end] = newInterval;
  for (let i = 0; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    if (currentStart > end) {
      result.push([start, end]);
      start = currentStart;
      end = currentEnd;
    } else if (currentEnd < start) {
      result.push(intervals[i]);
    } else {
      start = Math.min(start, currentStart);
      end = Math.max(end, currentEnd);
    }
  }
  result.push([start, end]);
  return result;
};

insert(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5]
);

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert2 = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // before overlapping
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // overlapping
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);
  // after overlapping
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};
