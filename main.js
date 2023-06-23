let k = 5; n = 10;
 

for (let i = 1; i <= n; i++) {
  console.log(k);
}


let a = 1;
let b = 15;
for (let i = a; i<= b; i++){
  console.log(i);
}


let a = 20;
let b = 1;

if (a>b) {
  for (let i = a-1; i>b; i--){
  console.log(i);
  }
}

let n = 10000;
let bn = 0;

for (let i = 1; i <= 10; i++) {
  bn += n * i;
}
console.log(bn);


let n = 10000;
let kg = 0.2;
let h = n * kg;

console.log("konfetning narxi: "+ h +" so'm ")