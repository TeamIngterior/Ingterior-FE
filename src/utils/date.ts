export const parsedTimeToString = (time: Date) => {
  const hour = time.getHours();
  const minute = time.getMinutes();
  return `${hour > 12 ? '오후' : '오전'} ${hour % 12}시 ${minute}분`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}.${formattedMonth}.${formattedDay}`;
};
