let input = process.argv.slice(2);
let toNumbers = input => input.map(Number);
let inputNumbers= toNumbers(input);
let arrangedInput = inputNumbers.sort(function(a, b) {
  return a - b;
});
//console.log(arrangedInput);
let time = 1000;
let decentTime = arrangedInput[(arrangedInput.length)-1]*1100;

for(let i=0; i < arrangedInput.length; i++){
 if(Number(arrangedInput[i])){
  setTimeout(()=>{
    process.stdout.write('.');
  }, arrangedInput[i]*1000)

}
}

setTimeout(()=>{
  console.log('');
}, decentTime)

