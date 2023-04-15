import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const numberFormatter = (number: number, decimals = 2) => {
  const formatter = new Intl.NumberFormat('us-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return formatter.format(number);
};

export const dateFormmatter = (date: string) => {
  const dateFormatted = format(new Date(date), "dd 'de' MMMM',' yyyy", {
    locale: es,
  }).toLocaleLowerCase();

  return dateFormatted;
};
