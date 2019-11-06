import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDates = (date: Date) => {
  return format(date, 'yyyy년 MM월 dd일');
};

export const formatDatesDot = (date: Date) => {
  return format(date, 'yyyy.MM.dd');
};

export const formatDatesDay = (date: Date) => {
  return format(date, 'dd일 iiii', { locale: ko });
};
