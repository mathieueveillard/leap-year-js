import { isLeapYear } from ".";

describe("A leap year is divisible by 4", function () {
  it("should state that 2003 is NOT a leap year", function () {
    expect(isLeapYear(2003)).toEqual(false);
  });

  it("should state that 2004 is a leap year", function () {
    expect(isLeapYear(2004)).toEqual(true);
  });

  it("should state that 2008 is a leap year", function () {
    expect(isLeapYear(2008)).toEqual(true);
  });
});

describe("...but is not otherwise divisible by 100", function () {
  it("should state that 2100 is NOT a leap year", function () {
    expect(isLeapYear(2100)).toEqual(false);
  });

  it("should state that 2200 is NOT a leap year", function () {
    expect(isLeapYear(2200)).toEqual(false);
  });
});

describe("...unless it is also divisible by 400", function () {
  it("should state that 2000 is a leap year", function () {
    expect(isLeapYear(2000)).toEqual(true);
  });

  it("should state that 2400 is a leap year", function () {
    expect(isLeapYear(2400)).toEqual(true);
  });
});
