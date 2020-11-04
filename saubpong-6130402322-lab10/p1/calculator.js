const readline = require('readline');
const { addfunct } = require('./add');
const { minusfunct } = require('./substract');

const args = process.argv.slice(2)

const answer1 = parseInt(args[0]);
const answer2 = parseInt(args[1]);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('add | sub ', (select) => {

        if(select == "add"){ 
            var result = require('./add')
            console.log( `${answer1} ` +'+'+` ${answer2}` + ' = '+ addfunct(answer1,answer2));
            rl.close();}

        else if(select == "sub"){
            var result = require('./substract')
            console.log(`${answer1} ` +'-'+` ${answer2}` + ' = '+ minusfunct(answer1,answer2));
            rl.close();
    }
});
