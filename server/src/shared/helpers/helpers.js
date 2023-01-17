export const calculateAverage = array => {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
};

export const sumTime = timeArray => {
  let sum = 0;
  timeArray.forEach(time => {
    const splitTime = time.split(':');
    const hour = parseInt(splitTime[0]);
    let minute = parseInt(splitTime[1]);
    const second = parseInt(splitTime[2]);

    minute = minute + hour * 60;
    sum = sum + minute + second / 60;
  });
  sum = Math.round(sum);
  return sum;
};
