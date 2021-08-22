export const convertTime = (durationInSeconds) => {
  const MINUTES = Math.floor(durationInSeconds / 60);
  const SECONDS = Math.ceil(durationInSeconds - MINUTES * 60);
  // if SECONDS is lower than 9 we add a 0 to turn the number into the right format x:xx
  return `${MINUTES}:${SECONDS > 9 ? SECONDS : '0' + SECONDS}`;
};
