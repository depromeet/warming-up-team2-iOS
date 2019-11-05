import { format } from 'date-fns';

export const formatDates = (date: Date) => {
  return format(date, 'yyyy년 MM월 dd일');
};

export const formatRelativeDate = (date: Date) => {
  // return formatRelative(date, "'Today is a' iiii");
};
