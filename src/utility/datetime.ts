import dayjs from "dayjs";

const getTimeStamp = () => {
  return dayjs().format("YYYYMMDDhhmmss");
};

export default { getTimeStamp };
