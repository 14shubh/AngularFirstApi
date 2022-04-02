const category = require('../model/categoryModel');

exports.addCategory = (req, res, next) => {
    categoryName = req.body.categoryName;
    categoryImage = 'http://localhost:3000/categoryImages/' +req.file.originalname;

    category.create({categoryName: categoryName, categoryImage: categoryImage}).then((result) => {
        res.status(201).json({
            status: 'success',
            result
        })
    }).catch((err) => {
        res.status(401).json({message: 'Somthing went wrong'});
        console.log(err);
    })
}