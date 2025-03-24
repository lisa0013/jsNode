// js with server/01_const.js
const count = 0;

// var count = 10;
// count = 10;
console.log(count);

const user = {
    "id" : "user01",
    "name" : "Hong"
}

user.id = "mgro01";
user.name = "Kang";
user.ssn = "981015";
console.log(user);

user = {};
console.log(user);

// 객체가 가진 값들은 변경 가능한데, 객체 자체는 변경 불가.