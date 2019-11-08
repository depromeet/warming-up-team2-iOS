import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDates = (date: Date) => {
  return format(date, 'yyyy년 MM월 dd일');
};

export const formatDatesDot = (date: Date) => {
  return format(date, 'yyyy.MM.dd');
};

export const formatDatesDash = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export const formatDatesDay = (date: Date) => {
  return format(date, 'dd일 iiii', { locale: ko });
};

export const formatDatesDashfromKO = (dateStr: string) => {
  return dateStr
    .replace('년 ', '-')
    .replace('월 ', '-')
    .replace('일', '');
};
