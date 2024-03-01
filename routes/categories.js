const express = require('express')
const pool = require('../config/query.js')

const router = express.Router()

router.get('/', (req, res) => {
   pool.query('SELECT * FROM category', (err, result) => {
      if (err) {
         console.log(err)
         res.status(500).json({message: "Internal Server Error"})
      }
      res.status(200).json(result.rows)
   })
})

router.get('/:category_id', (req, res) => {
   const category_id = parseInt(req.params.category_id)

   pool.query(`SELECT * FROM category WHERE category_id = ${category_id}`, (err, result) => {
      if (err) {
         console.log(err)
         res.status(500).json({message: "Internal Server Error"})
      }
      res.status(200).json(result.rows)
   })
})

module.exports = router
