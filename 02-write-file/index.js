const fs = require('fs');
const path = require('path');
const { stdin } = require('process');

console.log('Hi! Enter your text: ');
process.on('SIGINT', () => {
  console.log('\nBye!');
  process.exit();
});
stdin.on('data', (data) => {
  fs.appendFile(path.join(__dirname, 'text.txt'), data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  if (data.toString().trim() === 'exit') {
    console.log('Bye!');
    process.exit();
  }
  console.log('Enter your text: ');
});
