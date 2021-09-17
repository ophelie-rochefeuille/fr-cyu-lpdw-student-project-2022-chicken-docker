const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Trajets} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(trajets => {
      console.log(trajets)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})