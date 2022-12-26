import { format } from 'date-fns';

export function dateFormat(date) {
  return date instanceof Date ? format(date, 'MMMM uuuu') : date;
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
