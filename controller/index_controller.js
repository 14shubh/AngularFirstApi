const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
require('../database/database_config');
exports.SignUp = (req, res, next)=>{
    User.create(req.body).then(result=>{
        res.status(201).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    });
};

exports.SignIn = (req, res, next) => {
    User.findOne(req.body).then(result => {
        if (result){
            console.log('login Successful');
            let payload ={subject: result._id};
            let token = jwt.sign(payload,'adkgshubhambahutsamjhhdarhkabhigaltinhikrteckjbgjkab');

           return res.status(201).json({
               status : true,
               result : result,
               token : token
           });
        }else{
            console.log('login Failure');
        }
    }).catch(err=>{
        console.log(err +'Somthing went wrong');
       return res.status(500).json(err);
    })
}