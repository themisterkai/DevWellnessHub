export const getCurrentDate = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};

export const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
