// const express = require('express');
// const router = express.Router();
// const { body , validationResult } = require('express-validator')
// const userModel = require('../models/user.models')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')


// router.get('/register',(req,res) => {
//     res.render('register')
// })


// // this route for the register Page
// router.post('/register',
//     body('email').trim().isEmail(),
//     body('password').trim().isLength({ min: 6 }),
//     body('username').trim().isLength({min : 3}),
    
//     async (req,res) => {

//     const errors = validationResult(req);
    
//     if(!errors.isEmpty()){
//         return res.status(400).json({
//             errors: errors.array(),
//             message: 'Invalid data'
//         })
//     }

//     const { email , password, username } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await userModel.create({
//         email,
//         username,
//         password: hashedPassword
    
//     })
//     res.json(newUser)

// })

   
// router.get('/login',(req,res) => {
//     res.render('login')
// })

// // this route for the login Page
// router.post('/login',
//     body('password').trim().isLength({ min: 6 }),
//     body('username').trim().isLength({min : 3}),
    
//     async (req,res) => {

//     const errors = validationResult(req);
    
//     if(!errors.isEmpty()){
//         return res.status(400).json({
//             errors: errors.array(),
//             message: 'Invalid data'
//         })
//     }

//     const { username , password} = req.body;


//     const user = await userModel.findOne({
//         username: username
//     })

//     console.log('Login attempt for username:', username);
//     console.log('Found user:', user);


//     if(!user){
//         return res.status(400).json({
//             message: 'username  is incorrect'
//         })
//     }



//     console.log('Entered password:', password);
//     console.log('Stored hash:', user.password);
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log('Compare result:', isMatch);


//     if(!isMatch){
//         return res.status(400).json({
//             message: ' password is incorrect'
//         })
//     }

//     console.log('JWT Secret:', process.env.JWT_SECRET);

//     const token = jwt.sign({
//         userId: user._id,
//         email:user.email,
//         username: user.username

//     },
//         process.env.JWT_SECRET,

//     )

//     res.cookie('token' , token)

//     return res.send('Logged in successfully')
// })

   
// module.exports = router;


const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { registerUser, loginUser } = require('../controllers/user.controller'); 

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register',
    
    body('email').trim().isEmail().withMessage('Must be a valid email address'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data provided'
            });
        }
        
        next(); 
    },
    
    registerUser
);



router.get('/login', (req, res) => {
    
    res.render('login');
});

router.post('/login',
    
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data provided'
            });
        }
        
        next(); 
    },
 
    loginUser
);

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/api/user/register');  // ✅ Correct path
});


    
module.exports = router;