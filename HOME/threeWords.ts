import { strict as assert } from 'assert';


function threeWords(text: string):boolean {

    let cont = 0;
     text.split(" ").forEach(x=>{
         new RegExp('[A-Z,a-z]').test(x)? cont+=1 : cont=0;
             if(cont== 3) return true;
     })
    return false;

}

console.log('Example:')
//console.log(threeWords("Hello 55 World hello fff"))
console.log(threeWords("Hello World hello"))

 assert.equal(threeWords("Hello World hello"), true);
 assert.equal(threeWords("He is 123 man"), false);
 assert.equal(threeWords("1 2 3 4"), false);
 assert.equal(threeWords("bla bla bla bla"), true);
 assert.equal(threeWords("Hi"), false);
