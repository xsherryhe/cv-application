import { format } from 'date-fns';

export function dateFormat(date, formatString = 'MMMM uuuu') {
  return date instanceof Date ? format(date, formatString) : date;
}

const humanReadableNames = {
  gpa: 'GPA',
};

export function humanReadable(string) {
  return (
    humanReadableNames[string] ||
    string
      .split(/(?=[A-Z])/)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  );
}
