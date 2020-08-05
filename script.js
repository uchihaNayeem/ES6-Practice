//23.1

const hubby = `Omar Sunny` // const is fixed, cant change it later

console.log(hubby);

//23.2

const realAge = [12, 34, 67, 45, 25, 97];
console.log(realAge);

realAge[0] = 100;
console.log(realAge);
realAge.push(9999);
console.log(realAge); // akhane const korar poreo index dhore change kora jay; abar push pop kora jay


const actorsHollywood = {name: `Tom Hanks`, age: 18};
console.log(actorsHollywood);
actorsHollywood.age = 288;
console.log(actorsHollywood);

for (let i = 0; i < 10; i++) { //let use korle var er value baire theke access kora jabena BLOCK Scope er jonno
  const element = i;
  console.log(i);
  
}

//23.3 Default value in para meter

function addNumbers(num1, num2 = 10){
//  num2 = undefined||122;
  const total = num1 + num2;
  return total;
}

//23.4 tamplete string `` (jetake jantan back ticks name)

let firstName = `Justin`;
let lastName = `TimberLake`;

let hisOcupation = `${firstName} ${lastName} is a singer.`;
console.log(hisOcupation);

let porerLine =  `hi
this is ${firstName} ${lastName}
I'm a singer.
nicer line dekho...
mericay thaki >.<`

console.log(porerLine);

//23.5 arrow fungtion multiple parems func body

// function doubleIt(num){
//   return num*2;
// }



let doubleIt = num => num*2

let addNums = (x , y) => x +y;

let doSomeMath = (num1, num2) =>{
  const add = num1 + num2;
  const diffrenceValue = num1 - num2;
  const total = add * diffrenceValue;
  return total
}

const doubleItValue = doubleIt(5);
console.log(doubleItValue);


//23.6







