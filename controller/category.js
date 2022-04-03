const category = require('../model/categoryModel');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'angular-first-app', 
    api_key: '637632419498759', 
    api_secret: 'NDnMtwPsB7Gip0zXa3O8vdoLswQ' 
});
exports.addCategory = async (req, res, next) => {

    categoryName = req.body.categoryName;
    categoryImage = 'https://angular-first-app.herokuapp.com/images/categoryImages/'+req.file.filename;

    await cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        categoryImage = result.url;
    }).catch((err) => {
        console.log(err);
    });

    category.create({categoryName: categoryName, categoryImage: categoryImage})
    .then((result) => {
        return res.status(201).json({
            status: 'success',
            result: result
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({
            message: 'Somthing went wrong'
        });
        
    });
};

exports.viewCategory = (req, res, next)=>{
    category.find().then((result) => {
        res.status(201).json(result);
    }).catch((err) => {
        res.status(500).json({message: 'somthing went wrong'});
    });
}