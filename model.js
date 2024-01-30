const mongoose = require('mongoose')
const  expenseSchema = new mongoose.Schema({
    amount: Number,
    desc: String,
    title: String,
})

const Expense = mongoose.model('expenses', expenseSchema)

module.exports = Expense