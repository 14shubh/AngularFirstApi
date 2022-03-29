const User = require('../model/userModel');
require('../database/database_config');
exports.SignUp = (req, res, next)=>{
    User.create(req.body).then(result=>{
        res.status(201).json(result);
    }).catch(err=>{
        res.status(500).json(err,{msg : 'Something went wrong'});
    });
};

exports.SignIn = (req, res, next) => {
    User.findOne(req.body).then(result => {
        if (result){
            console.log('login Successful');
           return res.status(201).json(result);
        }else{
            console.log('login Failure');
        }
    }).catch(err=>{
        console.log(err +'Somthing went wrong');
       return res.status(500).json(err);
    })
}