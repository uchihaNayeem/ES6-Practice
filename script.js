const hubby = `Omar Sunny` // const is fixed, cant change it later

console.log(hubby);


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

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(i);
  
}