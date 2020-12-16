export function isLeapYear(year: number): boolean {
  return (isMultipleOf(4)(year) && !isMultipleOf(100)(year)) || isMultipleOf(400)(year);
}

function isMultipleOf(n: number) {
  return function (year: number): boolean {
    return year % n === 0;
  };
}
