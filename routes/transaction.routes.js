const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const protect = require('../middleware/auth');

const {
    createTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getSummary,
} = require('../controllers/transaction.controller');

const validateTransaction = [
    body('type')
        .isIn(['income', 'expense'])
        .withMessage('Type must be income or expense'),
    body('category')
        .notEmpty()
        .withMessage('Category is required'),
    body('amount')
        .isFloat({ gt: 0 })
        .withMessage('Amount must be a positive number'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


router.route('/')
    .get(protect, getTransactions)        
    .post(protect, validateTransaction, createTransaction); 

router.route('/:id')
    .put(protect, validateTransaction, updateTransaction)   
    .delete(protect, deleteTransaction);                   

router.post('/add', protect, validateTransaction, createTransaction);


router.get('/summary', protect, getSummary);


module.exports = router;
