const sentence = '|/-\\|/-\\';
let time = 0;
let newSentence = sentence + '\n';

for (let char of newSentence) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, time += 200);
}



