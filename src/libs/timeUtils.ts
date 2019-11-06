import { format } from 'date-fns';

export const formatTime = (date: Date) => {
  return format(date, 'HH: mm');
};

export const formatTime2 = (date: Date) => {
  // return format(date, 'HH:mm');
};
