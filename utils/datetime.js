import moment from "moment";

export const calculateDurationFormat = (from, to) => {
  const difference = moment.duration(moment(to).diff(moment(from)));
  const days = difference.days().toString().padStart(2, "0");
  const hours = difference.hours().toString().padStart(2, "0");
  const minutes = difference.minutes().toString().padStart(2, "0");
  const seconds = difference.seconds().toString().padStart(2, "0");
  return `${days}D ${hours}:${minutes}:${seconds}`;
};
