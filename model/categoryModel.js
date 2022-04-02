const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: 'string',
            required: true,
            unique: true
        },
        categoryImage: { 
            type: 'string', 
            required: true,
            trim: true
        }
    }
);

module.exports = mongoose.model('category',categorySchema);