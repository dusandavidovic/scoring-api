import dayjs from "dayjs";

const getTimeStamp = () => {
  return dayjs().format("YYYYMMDDhhmmss");
};

const isLE = (date: string, timeStamp: string | undefined) => {
  if (timeStamp) {
    const date1 = dayjs(date).format("YYYYMMDDhhmmss");
    return date1 <= timeStamp;
  }
  return true;
};

export default { getTimeStamp, isLE };
