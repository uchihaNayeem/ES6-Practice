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

let justFive = () => 5;

let doSomeMath = (num1, num2) =>{
  const add = num1 + num2;
  const diffrenceValue = num1 - num2;
  const total = add * diffrenceValue;
  return total
}

const doubleItValue = doubleIt(5);
console.log(doubleItValue);


//23.6 how to add arrays using 'concat' and  'Spred out or '... in javascript' 

// added several arrays in one array using'concat'
let schoolFrnd = [12, 23, 34, 45, 56];
let areaFrnd = [13, 24, 32, 32, 21];

let allFriends = schoolFrnd.concat(1000).concat(areaFrnd).concat(`olodama`, `rasengan`)

console.log(allFriends);

// let allFriends2 = [schoolFrnd, 1000, areaFrnd, `olodama`, `rasengan` ]

//addmultiple array usine '...'
let allFriends2 = [...schoolFrnd, 1000, `olodama`, ...areaFrnd]

console.log(allFriends2);


// another example

let business = 650;
let minister = 550;
let shocib = 450;

let maximum = Math.max(business, minister, shocib);
console.log(maximum);

// another exmple using ...

let inCorer = [450, 550, 455, 850];
let maxInCorer = Math.max(...inCorer);
console.log(maxInCorer);





