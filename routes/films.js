const express = require('express')
const pool = require('../config/query.js')

const router = express.Router()

router.get('/', (req, res) => {
   pool.query('SELECT * FROM film', (err, result) => {
      if (err) {
         console.log(err)
         res.status(500).json({message: "Internal Server Error"})
      }
      res.status(200).json(result.rows)
   })
})

router.get('/:filmId', (req, res) => {
   const filmId = parseInt(req.params.filmId)
   
   pool.query(`SELECT * FROM film WHERE film_id = ${filmId}`, (err, result) => {
      if (err) {
         console.log(err)
         res.status(500).json({message: "Internal Server Error"})
      }
      res.status(200).json(result.rows)
   })
})

module.exports = router