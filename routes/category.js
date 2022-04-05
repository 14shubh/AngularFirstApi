const express = require('express');
const router = express.Router();
const multer = require('multer');
const CategoryController = require('../controller/category');
const tokenVerification = require('../middleware/token_verification');

const storage = multer.diskStorage({
    destination : 'public/images/categoryImages',
    filename: (req, file, callback)=>{
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage:storage});

router.post('/add-category',upload.single('categoryImage'),tokenVerification.tokenVerification,CategoryController.addCategory);
router.get('/view-category',tokenVerification.tokenVerification,CategoryController.viewCategory);
router.post('/delete-category',tokenVerification.tokenVerification,CategoryController.deleteCategory);
module.exports = router;