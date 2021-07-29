// setup interface to handle user input from stdin
let connection;
const setupInput = (conn) => {
  connection = conn;
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
  if (key === 'w')
    connection.write("Move: up");
  if (key === 'a')
    connection.write("Move: left");
  if (key === 's')
    connection.write("Move: down");
  if (key === 'd')
    connection.write("Move: right");
};

module.exports = {
  setupInput
};