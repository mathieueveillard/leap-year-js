import * as qoa from "qoa";
import * as chalk from "chalk";
import { isLeapYear } from "./isLeapYear";

const input = {
  type: "input",
  query: "Year: ",
  handle: "year",
};

function displayAnswer({ year }) {
  console.log(
    isLeapYear(year) //
      ? chalk.green(`${year} is a leap year`)
      : chalk.red(`${year} is NOT a leap year`)
  );
}

qoa.prompt([input]).then(displayAnswer);
