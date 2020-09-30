let countVar = [];

function readInput(){ 
    let i = prompt("Enter an integer (a nagative integer to quit): ");
    number = Number(i);
    if (Number.isInteger(number)) {
        if (number > 0){
            countVar.push(number)
            return number,countVar;
        }else{
            return number,countVar;
        }
    }else{

        return number,countVar;
    }
}

function displayStats(number){
    let sum = countVar.reduce(function(a, b){
        return a + b;
    }, 0);

    let avg = (sum/ countVar.length).toFixed(2);
    return alert("For the list  "+countVar +", the average is "+ avg +  ", the minumun is "+Math.min.apply(Math,countVar)+ ", the maxinum is " + Math.max.apply(Math,countVar)) ;
}

outer: while (true) {
    readInput();
    list = readInput;
    if (number < 0) {
       (countVar == 0?  alert("For the list that is empty, the average is 0, the minimun is 0, and the maxinum is 0"): displayStats(list));
    }else if (number >0){
        continue;
    
    }else{
        continue;
    }
    
break outer;
}
