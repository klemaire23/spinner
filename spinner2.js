const sentence = '|/-\\|/-\\';
let time = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, time += 200);
}

setTimeout(() => {
  console.log('\n');
}, time);

