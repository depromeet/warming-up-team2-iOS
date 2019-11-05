import { format } from 'date-fns';

export const formatDates = (date: Date) => {
  return format(date, 'YYYY년 MM월 DD일');
};

export const formatRelativeDate = (date: Date) => {
  // return formatRelative(date, "'Today is a' iiii");
};
