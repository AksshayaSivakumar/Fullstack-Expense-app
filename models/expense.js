const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      type:Sequelize.STRING,
      name: Sequelize.STRING,
      date: {
      type: Sequelize.STRING,
      allowNull: false
      },
      amount:{
        type:Sequelize.DOUBLE,
        allowNull:false
      }
      })
      
      module.exports = Expense;
      
      
