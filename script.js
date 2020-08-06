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
let allFriends2 = [...schoolFrnd, 1000, `olodama`, ...areaFrnd] // '...' aita kaaj holo arrey er vitorer element nije kaj kora

console.log(allFriends2);


// another example

let business = 650;
let minister = 550;
let shocib = 450;

let maximum = Math.max(business, minister, shocib);
console.log(maximum);

// another exmple using "..."

let inCorer = [450, 550, 455, 850];
let maxInCorer = Math.max(...inCorer);
console.log(maxInCorer);


// 23.7 class constructor for objects

//Q keno aita use korbo? ans: jokhon same property onek object lage tokhon

class student{

  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.schoolName = `Konoha Gakure`
  }


}

const student1 = new student(01, `olodama`);
const student2 = new student(02, `rasengan`);
const student3 = new student(03, `KonohaMaru`);

console.log(student1, student2, student3);


// again Practice class an dconstructor for create awesome objects
class kdsGarmentsEmployee{


  constructor(eId, eName, eAddress, ePossition){
    this.id = eId;
    this.name = eName
    this.address = eAddress
    this.possition =ePossition
    this.validity = `2020 - 2021`
  }

}

const employee1 = new kdsGarmentsEmployee(201001, `Rabeya`, `dokpoll, ctg`, `worker`);
const employee2 = new kdsGarmentsEmployee(201002, `Bokeya`, `dokpoll, ctg`, `worker`);
const employee3 = new kdsGarmentsEmployee(201003, `Bill kees Ara`, `dokpoll, ctg`, `MD`);
const employee4 = new kdsGarmentsEmployee(201004, `Barek`, `dokpoll, ctg`, `DGM`);
const employee5 = new kdsGarmentsEmployee(201005, `Jalali set`, `dokpoll, ctg`, `Supervisior`);

console.log(employee5);




//23.8 inheritens (shera jinish)

// oop te aita lage
//inheritance polimorphisom incapsulation agular DEfination must lagebe

class Parent{
  constructor(){
    this.fatherName = `Minato`;
  }
}



class Child extends Parent{
  constructor(cName, cAge){
    super()
    this.name = cName;
    this.age = cAge;
  }

  getFullName(){
    return this.name + ' ' + this.age + ' ' + this.fatherName
  }//class er vitor function lilha jay
}

const firstChild = new Child(`naruto`, 12);
const secondChild = new Child(`Kurama`, 120);
const thirdChild = new Child(`Kubee`, 1220);

console.log(firstChild);
console.log(secondChild);


console.log(secondChild.getFullName());
console.log(thirdChild.getFullName());


//23.9 destructuring 

const person = {name: `rasel`, age: 20, occupasion: `ISP`, address: `bandar`, relation: `single`, friends:[`omar`, `piyash`]}

//Q. kivabe easily object theke multiple property call korbo?
//ans:

const {name, salary, address} = person; //ai style a property ke variable a rakha jay

console.log(name, salary, address);

// for arrays

const marks = [`one`, 123, `sixteen`, 12, 50, 60]

const {six} = marks;

console.log(six);
