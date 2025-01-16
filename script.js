const box = document.querySelector('#prime-factorization');
const result = document.querySelector('#result');

const checkDivisors = () => {
  let value = box.value;
  let exponent = 0;
  let divisors = [];

  for(let number = 2; number <= value; number++) {
    //前述の①の処理
    if(value % number === 0) {
      //前の約数の分のカウントをリセットする
      exponent = 0;
      //同様に②の処理
      while(value % number === 0) {
        //valueをnumberで除算していき、ループごとにカウントを一つ増やして累乗の指数を求める
      	exponent++;
      	value /= number;
      }
      //一つ目の約数と指数を配列にpush
      divisors.push({number, exponent});
    }
    //この流れを(value / number === 1)になるまで繰り返す
  }
  
  //連続して使用する時のために一度中身を空にする
  box.value = null;
  result.textContent = null;

  //上記のループ処理で求めた素因数が格納された配列を展開
  divisors.forEach((divisor, index) => {
    if(index === divisors.length - 1) {
      //最後はスペースと*が要らない
      result.textContent += `${divisor.number}^${divisor.exponent}`;
      return;
    }
    result.textContent += `${divisor.number}^${divisor.exponent}\n*\n`;
  })
}

box.addEventListener('keydown', e => {
  if(e.key === 'Enter') {
    checkDivisors();
  }
})
