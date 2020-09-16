let rangeVar;
checkVarPos:
for(let i=0;i>=0; i++){
    let n = prompt('enter a positive integer:');
    let number = Number(n);
    let checkInt = Number.isInteger(number);
    if(number==0){
        continue checkVarPos;
    }
    if (checkInt == true) {
        if (number>=0){
            rangeVar = number;
            break checkVarPos;
        }else{
            continue checkVarPos;
        }
    }else{
        continue checkVarPos;
    }
}

function test_prime(x){
  let box = [], i,j, primes = [];
  for (i=2; i<=x; ++i){
      if(!box[i]){
          primes.push(i);
          for (j=i<<1; j<=x; j+=i){
              box[j] = true;
          }
      }
  }
  return primes;
}
if(rangeVar==1){
    alert("For n = "+rangeVar+" prime number are no prime number");
}
else{
    alert("For n = "+rangeVar+" prime number are "+test_prime(rangeVar));
}





