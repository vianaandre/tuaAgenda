import { isValid } from 'date-fns';

export function validateDate(date: string) {
  const [day, month, year] = date.split('/');

  if (Number(day) > 31) {
    return false;
  }

  if (Number(month) > 11) {
    return false;
  }

  if (isValid(new Date(Number(year), (Number(month) - 1), Number(day)))) {
    return true;
  }

  return false;
}
