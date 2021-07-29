const { stdin } = require("process");
const {connect} = require("./client");
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on('data', (key) => handleUserInput(key));
const handleUserInput = (key) => {
  if (key === '\u0003')
    process.exit();
}
console.log("Connecting ...");
connect();
setupInput();