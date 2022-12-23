import { format } from 'date-fns';

export function dateFormat(date) {
  return date instanceof Date ? format(date, 'MMMM uuuu') : date;
}
