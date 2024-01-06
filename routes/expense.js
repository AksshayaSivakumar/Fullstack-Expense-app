const path=require('path');
const express=require('express');
const trackerController=require('../controllers/tracker');

const router=express.Router();



router.get('/get-form', trackerController.getFormDetails);
router.get('/get-expense',trackerController.getExpenseDetails);
router.post('/post-expense',trackerController.postExpenseDetails);
//router.put('/edit-expense',trackerController.editExpenseDetails);
router.delete('/delete-expense/:id',trackerController.deleteExpenseDetails);


module.exports=router;