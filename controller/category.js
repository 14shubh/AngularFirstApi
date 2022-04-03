const category = require('../model/categoryModel');

exports.addCategory = (req, res, next) => {
    categoryName = req.body.categoryName;
    categoryImage = 'https://angular-first-api.herokuapp.com/images/categoryImages/'+req.file.filename;

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
