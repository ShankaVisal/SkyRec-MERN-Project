import Category from "../models/category.js"

export function createCategory(req,res){

    const user = req.user

    if(!user){
        res.status(403).json({
            message: "Please Login to create a category"
        })
        return
    }

    if(user.type !== "admin"){
        res.status(403).json({
            message: "You do not have a permission to create a category"
        })
        return
    }

    const category = req.body.item
    const newCategory = new Category(category)
    newCategory.save().then(
        ()=>{
            res.status(200).json({
                message: "new category is created successfully"
            })
        }
    ).catch(
        (e)=>{
            res.status(500).json({
                message : "Galley item creation failed"
            })
            console.log(e)
        }
    )
}

export function GetCategory(req,res){
    const user = req.user

    if(!user){
        res.status(403).json({
            message: "Please Login to create a category"
        })
        return
    } else {
        Category.find().then(
            (list)=>{
                res.json({
                    list : list
                })
            }
        ).catch(
            (err)=>{
                res.json({
                    message: err
                })
            }
        )
    }
}
