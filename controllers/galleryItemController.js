import GalleryItem from "../models/galleryItems.js"

export function createGalleryItem (req, res){

    const user = req.user

    if(user == null){
        res.status(403).json({
            message: "Please Login to create a gallery item"
        })
        return
    }

    if(user.type != "admin"){
        res.status(403).json({
            message: "You do not have a permission to create a gallery item"
        })
        return
    }

    const galleryItem = req.body.item
    const newGalleryItem = new GalleryItem(galleryItem)
    newGalleryItem.save().then(
        ()=>{
            res.json({
                message : "Gallery item created successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Galley item creation failed"
            })
        }
    )
}

export function GetGalleryItems (req, res){
    GalleryItem.find().then(
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