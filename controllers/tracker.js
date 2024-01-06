const path = require('path');

const rootDir=require('../util/path');
const Expense= require('../models/expense');


exports.getFormDetails=async(req, res, next) =>{
  console.log("hi");
  res.sendFile(path.join(rootDir,'views','expense.html'));
}

exports.postExpenseDetails= async (req,res,next)=>{

  try 
    {

   if(!req.body.date)
   {
    throw new Error('date is mandatory')
   }
    const type=req.body.type;
    const name = req.body.name;
    const date=req.body.date;
    const amount=req.body.amount;
    const data = await Expense.create({
        type:type,
        name:name,
        date:date,
        amount:amount
       
    })
     console.log('updated success');
     
    res.status(201).json({newExpenseDetail:data})
    
     
    }
catch(err)

{
    res.status(500).json({error:err})
}


}

exports.deleteExpenseDetails=async (req,res,next)=> {
  try {
   if(req.params.id == 'undefined')
   {

       console.log('ID is Missing');
       return res.status(400).json({err:'Id is missing'})
   }
    const expenseId=req.params.id;
    await Expense.destroy({where:{id:expenseId}});
    res.sendStatus(200);
  } catch (err) {
   console.log(err);
   res.status(500).json(err)
  }
}

exports.getExpenseDetails= async (req,res,next)=>{

  try {
    const expense= await Expense.findAll()
    console.log("expense");
    console.log(expense); 
    res.status(200).json({allExpenses:expense})
  } catch (error) {
   console.log('Get expense is failing',JSON.stringify(error));
   res.status(500).json({error:err})
}

// exports.editExpenseDetails = async (req,res,next)=>{
//       const userid=req.params.id;
//       const updatedtype=req.body.type;
//       const updatedname=req.body.name;
//       const updateddate=req.body.date;
//       const updatedamount=req.body.amount;
    
//     try { 
//       const updatedname=req.body.name
//      if(!userid || userid=='undefined')
//      {
//          console.log('Id is missing or undefined')
//         return res.Status(420).json(err)
//      }
//        const data=await Expense.update({
//            type:updatedtype,
//            name:updatedname,
//            date:updateddate,
//            amount:updatedamount
//       },
//       {where:{id:userid}})
//       res.status(200).json({editExpenses:data})
      
     
//     } catch (error) {
//             console.log(error,JSON.stringify(error))
//          res.status(520).json({error})
//     }
//   }
}