const express = require('express')
const router = express.Router()
const Subject = require('../models/subject')

router.get('/', async (req, res) => {
    const subject = await Subject.find()
    res.render('index', {title: 'Home', newSubject: new Subject(), subject: subject, option: ''});
  })

module.exports = router