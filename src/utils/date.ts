export const parsedTimeToString = (time: Date) => {
  const hour = time.getHours();
  const minute = time.getMinutes();
  return `${hour > 12 ? '오후' : '오전'} ${hour % 12}시 ${minute}분`;
};
