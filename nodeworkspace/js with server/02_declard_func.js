// js with server/02_declare_func.js

// 1) 함수 선언문 (밑에)=> var 
/* 함수호이스팅
function plus(x,y,z){
  return(x+y+z);
}
*/
let result = plus(1,2);
console.log(result);

function plus(x,y) {
  return (x+y);
}

function plus(x,y,z){
  return(x+y+z);
}

// 2) 함수표현식 (위에)=> let, const 방식
const printMsg = function(keyword){
  return "result : + " + keyword;
}

// 3) 화살표 함수 : () => {}
// 3-1) 익명함수
let aray = [1,2,3,4,5];
aray.forEach(val => console.log(val));

const highFun = function(num){
  return (x) => {
    return x+num; // 리턴 구문에 함수가 들어가있으면 고차 함수.
  }
}

const addNum = highFun(10);
/* 
addNum = (x) => {
    return x+10;  
  }
    */
result = addNum(5);
console.log(result);

// 3-2) 화살표 함수 + 함수표현식
const multi = (x,y) => x * y;
console.log(multi(2,4));