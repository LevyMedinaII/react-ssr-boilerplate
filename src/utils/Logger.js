import chalk from 'chalk';

const ERROR_FLAG_TEXT = '  ERROR  ';
const ALERT_FLAG_TEXT = '  ALERT  ';
const SUCCESS_FLAG_TEXT = ' SUCCESS ';
const LOG_FLAG_TEXT = '   LOG   ';

class Logger {
  static error = message => {
    console.log(chalk.bgRed(chalk.bold.white(ERROR_FLAG_TEXT)), message);
  }
  static warning = message => {
    console.log(chalk.bgYellow(chalk.bold.white(ALERT_FLAG_TEXT)), message);
  }
  static success = message => {
    console.log(chalk.bgGreen(chalk.bold.white(SUCCESS_FLAG_TEXT)), message);
  }
  static text = message => {
    console.log(chalk.bgWhite(chalk.bold.gray(LOG_FLAG_TEXT)), message);
  }
}

export default Logger;