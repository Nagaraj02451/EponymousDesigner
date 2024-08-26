const catchAsyncError = require('../middlewares/catchAsyncError');
const User = require('../models/userSchema');
const sendEmail = require('../utils/email');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwt');
const crypto = require('crypto')
const nodemailer = require("nodemailer");

//Register User - /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password, telephone } = req.body

    // console.log(email,password , "bunbuhb");
    if (email && password) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "files.aweganyz@gmail.com",
                pass: "dlovgnhexemnhnlq"
            }
        });
        const mailOptions = {
            from: "files.aweganyz@gmail.com",
            to: email,
            subject: "Eponymous Registration",
            html: `
      
  <div style="background-color : rgba(233, 215, 198, 1); text-align:center; padding:2% 5%; margin:3% 1%; ">

    <h1 style="font-family: sans-serif;  font-weight: 500;
  font-style: normal; font-size:32px;">Eponymous</h1>
    <h1 style="font-family: sans-serif;  font-weight: 500;
    font-style: normal; font-size:32px;">Welcome, ${name}</h1>
    <p style="font-size: 18px;">Id aliquam ornare pharetra nisi mauris. Ipsum ipsum adipiscing purus dignissim diam nisl.</p>
    <div style="border: 1px solid #000; width:50%; margin-left:auto; margin-right:auto; margin-top:2%; margin-bottom:2%; "></div>
    <p style="font-size: 16px; line-height:16px ; text-align:start;">Id aliquam ornare pharetra nisi mauris. Ipsum ipsum adipiscing purus dignissim diam nisl. Ultrices egestas sem
      nibh risus elementum et nisi molestie. Lorem at tellus id convallis ipsum. Viverra sit enim adipiscing neque
      facilisis feugiat sit. Sollicitudin pharetra est dui commodo interdum mauris dictum vitae. Ligula nunc ipsum
      tempus aenean eros nibh. Enim egestas lorem faucibus tellus dapibus a. Mattis quis a tortor et in aliquet vitae
      interdum pellentesque. Nisl porta magna bibendum mauris quam at at faucibus tellus. </p>
    <p style="font-size: 16px; line-height:16px ; text-align:start;">Tellus nulla feugiat etiam pellentesque rhoncus dignissim dignissim eget dui. Commodo viverra sed duis pharetra
      convallis orci sed massa. Mauris varius condimentum enim pulvinar adipiscing erat velit. Scelerisque turpis
      posuere fermentum luctus lectus sit amet convallis augue.</p>
    <p style="font-size: 16px; line-height:16px ;text-align:start;">Amet sit et volutpat eros netus amet ut vitae integer. Nibh commodo eu volutpat et dolor. Aliquam quis sem nullam
      ac.</p>
    <div style="border: 1px solid #000; width:50%; margin-left:auto; margin-right:auto; margin-top:3%; margin-bottom:3%; "></div>
    <p style="font-size: 16px; line-height:16px">At imperdiet elit non sociis malesuada tellus amet mi interdum. Nunc mi dui donec volutpat viverra urna pretium
      risus massa. Tellus nunc pharetra id quis. Enim risus eu sem urna venenatis. Consectetur lorem adipiscing sit
      porta.</p>

      <div style="display: flex; justify-content:space-between;">
        <p style="font-size: 10px; line-height:12px">Phone Number : +91 245 151 1556</p>
        <p style="font-size: 10px; line-height:12px; margin-left:auto;">Email Address : hello@eponymous.com</p>
      </div>
  </div>

              
        
          `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                // res.status(201).json({status:201,info})
            }

        })

    }
    // let avatar;

    // let BASE_URL = process.env.BACKEND_URL;
    if (process.env.NODE_ENV === "production") {
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }

    // if(req.file){
    //     avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`
    // }

    const user = await User.create({
        name,
        email,
        telephone,
        password

    });


    sendToken(user, 201, res)

})



//Login User - /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    //finding the user database
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    if (!await user.isValidPassword(password)) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    sendToken(user, 201, res)

})

//Logout - /api/v1/logout
exports.logoutUser = (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
        .status(200)
        .json({
            success: true,
            message: "Loggedout"
        })

}

//Forgot Password - /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404))
    }

    const resetToken = user.getResetToken();
    await user.save({ validateBeforeSave: false })

    let BASE_URL = process.env.FRONTEND_URL;
    if (process.env.NODE_ENV === "production") {
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }


    //Create reset url
    const resetUrl = `${BASE_URL}/password/reset/${resetToken}`;

    const message = `Your password reset url is as follows \n\n 
    ${resetUrl} \n\n If you have not requested this email, then ignore it.`;

    try {
        sendEmail({
            email: user.email,
            subject: "Eponymous Password Recovery",
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message), 500)
    }

})

//Reset Password - /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTokenExpire: {
            $gt: Date.now()
        }
    })

    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or expired'));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match'));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save({ validateBeforeSave: false })
    sendToken(user, 201, res)

})

//Get User Profile - /api/v1/myprofile
exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})

//Change Password  - api/v1/password/change
exports.changePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    //check old password
    if (!await user.isValidPassword(req.body.oldPassword)) {
        return next(new ErrorHandler('Old password is incorrect', 401));
    }

    //assigning new password
    user.password = req.body.password;
    await user.save();
    res.status(200).json({
        success: true,
    })
})

//Update Profile - /api/v1/update
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    let newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    let avatar;
    let BASE_URL = process.env.BACKEND_URL;
    if (process.env.NODE_ENV === "production") {
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }

    if (req.file) {
        avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`
        newUserData = { ...newUserData, avatar }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })

})

//Admin: Get All Users - /api/v1/admin/users
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    })
})

//Admin: Get Specific User - api/v1/admin/user/:id
exports.getUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user
    })
});

//Admin: Update User - api/v1/admin/user/:id
exports.updateUser = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Admin: Delete User - api/v1/admin/user/:id
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    await user.remove();
    res.status(200).json({
        success: true,
    })
})
