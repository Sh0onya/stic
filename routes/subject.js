const express = require('express')
const router = express.Router()
const Subject = require('../models/subject')
const CryptoJS = require('crypto')


router.get('/', async (req, res) => {
  res.redirect('../')
})
router.get('/:id', async (req, res) => {
    let searchOptions = {}
    searchOptions._id = req.params.id
    const subject = await Subject.find(searchOptions)
    res.render('subject/index', {title:subject[0].name, subject: subject, option: "\u2630"});
    //res.send(subject[0].name)
  })
  router.put('/:id/', async (req, res) => {
    let subject = await Subject.findById(req.params.id)
    if(req.body.action == 'Delete')
    {
      if(subject.name == req.body.dname){
        subject.isActive = false
        await subject.save()
    res.redirect('../')
    }
    }
    else if(req.body.action == 'Add')
    {
      newTopic = {title: req.body.aname}
      subject.nopic += 1
      subject.topic.push(newTopic)
      await subject.save()
      res.redirect(req.params.id)
    }
  
  
  })/*
    else if(req.body.action == 'Creatran')
    {
      if(req.body.amount != 0){
        const categoriesExpense = ["Food","Automobile","Donations","Groceries","Entertainment","Study","Travel/Vacation","Phone","House Hold","Health Care", "Gifts"]
        const categoriesIncome = ["Savings","Salary","Interest","Gift"]
        let account = await Account.findById(req.params.id)
        let transaction = account.activity
        checkExpense = categoriesIncome.includes(req.body.category)
        actualAmount = (checkExpense?req.body.amount*1.00:req.body.amount*-1.00)
        let newTransaction = {title: req.body.title, amount: actualAmount, category: req.body.category, description: req.body.description, isexpense: !checkExpense, postranbal: ((account.transum+actualAmount)*1.00)}
        account.activity.push(newTransaction)
        account.transum = (account.transum+actualAmount)*1.00
        //res.send(newTransaction)
        await account.save()
        res.redirect("../"+req.params.id)
      }
      }
  
  })*/
  router.put('/:id/:tid', async (req, res) => {
    if(req.body.action == 'Delete'){
      let subject = await Subject.findById(req.params.id)
      let topic = subject.topic
      let entry = topic.find(entry => entry._id == req.params.tid)
      if(entry.title == req.body.dtitle){
        entry.isActive = false
        subject.nopic -= 1
      }
      await subject.save()
      res.redirect('../'+req.params.id)
    }
    
    /*
    else if(req.body.action == 'Update'){
      if(req.body.amount != 0){
      const categoriesExpense = ["Food","Automobile","Donations","Groceries","Entertainment","Study","Travel/Vacation","Phone","House Hold","Health Care", "Gifts"]
      const categoriesIncome = ["Savings","Salary","Interest","Gift"]
      let account = await Account.findById(req.params.id)
      let transaction = account.activity
      let entry = transaction.find(entry => entry._id == req.params.tid)
      entry.description = req.body.description
      entry.postranbal = entry.postranbal - entry.amount
      entry.amount = req.body.amount
      entry.title = req.body.title
      entry.category = req.body.category
      checkExpense = categoriesIncome.includes(entry.category)
      if(checkExpense){
        entry.isexpense = false
      }
      else{
        entry.isexpense = true
      }
      if(entry.isexpense)
      {
        entry.amount *= -1.00
      }
      entry.postranbal = entry.postranbal + entry.amount
      account.transum = entry.postranbal
      await account.save()
    }
    }
    res.redirect("../"+req.params.id)
  */})

  router.post('/', async (req, res) => {
    const subject = new Subject({
      name: req.body.name,
    })
    const newSubject = await subject.save()
    res.redirect('../')
    //res.send(subject)
    //res.redirect('subject/'+subject._id)
  })

module.exports = router