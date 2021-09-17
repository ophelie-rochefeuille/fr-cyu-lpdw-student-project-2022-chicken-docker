const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Villes} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(villes => {
      console.log(villes)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})