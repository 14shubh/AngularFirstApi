const express = require('express');
const router = express.Router();
const multer = require('multer');
const CategoryController = require('../controller/category');

const storage = multer.diskStorage({
    destination : 'public/images/categoryImages',
    filename: (req, file, callback)=>{
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage:storage});

router.post('/add-category',upload.single('categoryImage'),CategoryController.addCategory);
router.get('/view-category',CategoryController.viewCategory);
module.exports = router;