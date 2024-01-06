const path=require('path');

const express=require('express');

const bodyparser=require('body-parser');

const cors=require('cors');

const rootDir=require('./util/path');

const sequelize=require('./util/database');



const app=express();

const expenseRoutes=require('./routes/expense');


app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));
//app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin',expenseRoutes);
app.use(cors());


sequelize.sync()
.then(result=>{

    app.listen(3004);
    
})
.catch(err=>console.log(err))