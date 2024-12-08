import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js'



const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                //secur url la tha store Agum
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, sizes, bestSeller);
        console.log(imagesUrl);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }


        console.log(productData);


        const product = new productModel(productData);

        await product.save();

        res.json({
            success: true,
            product,
            message: "Product Added Successfully"
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }

}

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({
            success: true,
            products,
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }



}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product Removed Succesfully"
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }

}

const singleProduct = async (req, res) => {

    try {
        const {productId} = req.body // Get product ID from request parameters
        const product = await productModel.findById(productId); // Find the product by ID

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({ success: true, product });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }
}


export { addProduct, listProducts, removeProduct, singleProduct }