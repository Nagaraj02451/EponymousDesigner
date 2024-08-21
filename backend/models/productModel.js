const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        // required: true,
        default: 0.0
    },
    description: {
        type: String,
        // required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        // default : "male",
        // required: [true, "Please enter"],
        enum: {
            values: [
                'male',
                'female'
            ],
            message: "Please select"
        }
    },
    seller: {
        type: String,
        // required: [true, "Please enter"],
        enum: {
            values: [
                'Bengaluru',
                'chennai',
                'ooty'
            ],
            message: "Please select"
        }
    },
    stock: {
        type: Number,
        // required: [true, "Please "],
        maxLength: [20, '10']
    },
    designer: {
        type: String,
    },
    office: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    estadate: {
        type: String,
    },
    lable: {
        type: String,
    },
    lablelink: {
        type: String,
    },
    lable1: {
        type: String,
    },
    lablelink1: {
        type: String,
    },
    lable2: {
        type: String,
    },
    lablelink2: {
        type: String,
    },
    lable3: {
        type: String,
    },
    lablelink3: {
        type: String,
    },
    profile: {
        type: String,
    },
    special: {
        type: String,
    },
    specialpara: {
        type: String,
    },
    special1: {
        type: String,
    },
    specialpara1: {
        type: String,
    },
    special2: {
        type: String,
    },
    specialpara2: {
        type: String,
    },
    special3: {
        type: String,
    },
    specialpara3: {
        type: String,
    },
    special4: {
        type: String,
    },
    specialpara4: {
        type: String,
    },
    instagram: {
        type: String,
    },
    x: {
        type: String,
    },
    facebook: {
        type: String,
    },
    women: {
        type: String,
    },
    womendatas: {
        type: Array,
    },
    men: {
        type: String,
    },
    mendatas: {
        type: Array,
    },
    child: {
        type: String,
    },
    childdatas: {
        type: Array,
    },
    access: {
        type: String,
    },
    accessdatas: {
        type: Array,
    },
    jewell: {
        type: String,
    },
    jewelldatas: {
        type: Array,
    },
    foot: {
        type: String,
    },
    footdatas: {
        type: Array,
    },
    store: {
        type: String,
    },
    storelink: {
        type: String,
    },
    store1: {
        type: String,
    },
    storelink1: {
        type: String,
    },
    store2: {
        type: String,
    },
    storelink2: {
        type: String,
    },
    store3: {
        type: String,
    },
    storelink3: {
        type: String,
    },
    city: {
        type: String,
    },
    citylink: {
        type: String,
    },
    city1: {
        type: String,
    },
    citylink1: {
        type: String,
    },
    city2: {
        type: String,
    },
    citylink2: {
        type: String,
    },
    city3: {
        type: String,
    },
    citylink3: {
        type: String,
    },
    gallerytitle: {
        type: String,
    },
    status: {
        type: String,
        default: 'success'
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema