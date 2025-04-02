// index.js
const axios = require('axios');

// fetch
fetch('http://localhost:3000/customers')
.then(res => res.json())
.then(result => {
  console.log('fetch, GET');
  console.log(`\t`,result);
})
.catch(err => console.log(err));

// axios
axios('http://localhost:3000/customers')
.then(result => {
  console.log('axios, GET');
  console.log(`\t`,result.data);
})
.catch(err => console.log(err));

// 단건조회
axios.get('http://localhost:3000/customers/1')
.then(result => {
  console.log('axios, 단건조회');
  console.log(`\t`,result.data);
})
.catch(err => console.log(err));

// 등록
let insertInfo ={
  name: 'Jaein',
  email: 'Jaein@mail.com',
  phone: '010-1234-1234',
  address: null
};

// 1) fetch
fetch('http://localhost:3000/customers',
  {
    method : 'POST',
    headers : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(insertInfo),
  }
)
.then(res => res.json())
.then(result => {
  console.log('fetch, POST');
  console.log(`\t`,result);
})
.catch(err => console.log(err));

// 2) axios
axios.post('http://localhost:3000/customers/', insertInfo)
.then(result => {
  console.log('axios, 등록');
  console.log(`\t`,result.data);
})
.catch(err => console.log(err));