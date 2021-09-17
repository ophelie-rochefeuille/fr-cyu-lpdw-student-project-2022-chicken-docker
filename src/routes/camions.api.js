const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Camions} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(camions => {
      console.log(camions)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})