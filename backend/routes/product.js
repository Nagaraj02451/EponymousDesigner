const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviews, deleteReview, getAdminProducts } = require('../controllers/productController');
const router = express.Router();
const {isAuthenticatedUser } = require('../middlewares/authenticate');
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/product' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })


router.route('/products').get( getProducts);
router.route('/product/:id')
                            .get(getSingleProduct);
            
        
router.route('/review').put(isAuthenticatedUser, createReview)
                      


//Admin routes
router.route('/admin/product/new').post(isAuthenticatedUser,  upload.array('images'), newProduct);
router.route('/admin/products').get(isAuthenticatedUser,  getAdminProducts);
router.route('/admin/product/:id').delete(isAuthenticatedUser,  deleteProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, upload.array('images'), updateProduct);
// router.route('/admin/reviews').get(isAuthenticatedUser, getReviews)
// router.route('/admin/review').delete(isAuthenticatedUser, deleteReview)
module.exports = router;