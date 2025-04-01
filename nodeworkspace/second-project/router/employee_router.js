// router/employee_router.js
// 라우터 모듈
const express = require('express');
const router = express.Router();
const custService = require('../service/employee_service.js');
// employees
// 전체조회 : GET + '/employees'
router.get('/employees',async (req, res)=>{
  let custList = await custService.findAll();
  res.send(custList);
});
// 단건조회 : GET + '/employees/:id'
router.get('/employees/:id', async(req, res)=>{
  let custId = req.params.id;
  let custInfo = await custService.findByID(custId);
  res.send(custInfo);
});
// 등록     : POST + '/employees' + JSON
router.post('/employees', async (req, res)=>{
  let addCust = req.body;
  let result = await custService.addCustomer(addCust);
  res.send(result);
});
// 수정     : PUT + '/employees/:id' + JSON
router.put('/employees/:id', async (req, res)=>{
  let custId = req.params.id;
  let custUpInfo = req.body;
  let result = await custService.modifyCustomerInfo(custUpInfo, custId);
  res.send(result);
});
// 삭제     : DELETE + '/customers/:id'
router.delete('/employees/:id', async(req, res)=>{
  let custId = req.params.id;
  let result = await custService.removeCustomerInfo(custId);
  res.send(result);
});

module.exports = router;