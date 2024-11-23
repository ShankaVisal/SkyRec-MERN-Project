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

    const category = req.body
    const newCategory = new Category(category)
    newCategory.save().then(
        (result)=>{
            res.status(200).json({
                message: "new category is created successfully",
                result : result
            })
        }
    ).catch(
        (e)=>{
            res.status(500).json({
                message : "Category item creation failed"
            })
            console.log(e)
        }
    )
}

export function GetCategory(req,res){
    
    Category.find().then(
        (result)=>{
            res.json({
                categories : result
            })
        }
    ).catch(
        (err)=>{
            res.json({

                message: "couldn't get categories",
                message: err
            })
        }
    )
}


export function deleteCategory(req,res){
    if(req.user == null){
        res.status(401).json({
            message : "Please Login to create a category"
        })
        return
    }

    if(req.user.type !== "admin"){
        res.json({
            message: "You do not have a permission to create a category"
        })
        return
    }

    const categoryName = req.params.name

    Category.findOneAndDelete({name:categoryName}).then(
        (result)=>{

            if(result !== null){
                res.json({
                    message: categoryName + " " + "Category is successfully deleted",
                    result: result
                })
            }

            if(result == null){
                res.json({
                    message: "Couldn't find this category name",
                    result: result
                })
            }


           
        }
    ).catch(
        (err)=>{
            res.json({
                message: categoryName + " " + "Category couldn't deleted " + err,
                error: err
            })
        }
    )

}

export function getCategoryByName(req,res){
    const categoryName = req.params.name

    Category.findOne({name:categoryName}).then(
        (result)=>{

            if(result !== null){
                res.json({
                    message: result
                })
            }else{
                res.json({
                    message: categoryName + " "+ "category name not found in database"
                })
            }


        }
    ).catch(
        (err)=>{
            res.json({

                message: "failed to ge category",
                error: err
            })
        }
    )
}