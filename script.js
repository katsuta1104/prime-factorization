const box = document. querySelector("#prime-factorization");
const result = document. querySelector ("#result");
const checkDivisors = () => {
let value = box.value;
let exponent = 0;
let divisors = [];
for (let number = 2 ; number <= value; number++) {
if (value % number === 0) {
exponent = 0;
while (value % number === 0) {
exponent++;
value /= number;
}
divisors.push ({number, exponent});
}
}
box. value = null;
result.textContent = null;
divisors. forEach ((divisor, index) =>{
if (index === divisors. length-1) {
result.textContent += `${divisor.number}^${divisor.exponent}`;
return;
}
result.textContent += `${divisor.number}^${divisor.exponent}\n*\n*`;
})
}
box. addEventListener('keydown' ,e => {
if (e. key === 'Enter') {
checkDivisors();
})
