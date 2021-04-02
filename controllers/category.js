
const Category = require("../models/category")

//getting category by id
exports.getCategoryById =(req,res,next,id)=>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"Not found"

            })
        }
        req.category=cate;
        next();
    });
   
};

//insert new data
exports.createcategory=(req,res)=>{
    const category = new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Not able to save"
            });
        }
        res.json({category})
    })
}

//display in category
exports.getCategory = (req,res)=>{
    return res.json(req.category);
};

//display all data
exports.getAllCategory = (req,res)=>{
    Category.find().exec((err,categories) => {
        if(err){
            return res.status(400).json({
                error:"Not found"
            });
        }
        res.json(categories)
        
    })
    
}

exports.updateCategory = (req,res)=>{
    const category = req.category;
    category.name = req.body.name;
    category.save((err,updatedcategory)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to Update"
            });
        }
        res.json(updatedcategory);
    });
}


exports.removeCategory=(req,res)=>{
    const category = req.category;
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to delete"
            });
        }
        req.category.createdAt= undefined;
        req.category.updatedAt= undefined
        res.json({category,
            message:"is succesfully deleted"
        });
    });
}