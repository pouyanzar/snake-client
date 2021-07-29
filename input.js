// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', (key) => handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003')
    process.exit();
};

module.exports = {
  setupInput
};