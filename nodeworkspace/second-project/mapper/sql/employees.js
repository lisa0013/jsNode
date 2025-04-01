// mapper/sql/employees.js
// Table : employees

const selectAll = 
`SELECT id
       ,first_name
       ,last_name
       ,email
       ,genger
       ,ip_address
FROM employees
ORDER BY id`;

const selectById = 
`SELECT id
       ,first_name
       ,last_name
       ,email
       ,genger
       ,ip_address
FROM employees
WHERE id = ?`; // 단일값

const insertInfo = 
`INSERT INTO employees(first_name, last_name, email, genger, ip_address)
VALUES (?,?,?,?,?)`; // 배열
// {name:'H', address: 'daegu'}
// SET name = 'H', address = 'daegu'
const updateInfo = 
`UPDATE employees
SET ?
WHERE id = ?`; // 배열[ 객체, 단일값 ]

const deleteInfo =
`DELETE FROM employees
 WHERE id = ?`;

/*
1) ?개수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) ?앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자 날짜 등)
2-2) 컬럼이 없는 경우 객체
*/

module.exports = {
  // 'selectAll' : selectAll
  selectAll,
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo,
}