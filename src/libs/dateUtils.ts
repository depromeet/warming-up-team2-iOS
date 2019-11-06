import { format } from 'date-fns';

export const formatDates = (date: Date) => {
  return format(date, 'yyyy년 MM월 dd일');
};

export const formatDatesDot = (date: Date) => {
  return format(date, 'yyyy.MM.dd');
};
