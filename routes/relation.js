const express = require('express')
const pool = require('../config/query.js')

const router = express.Router()

router.get('/:body', (req, res) => {
   const body = req.params.body

   pool.query(
      `SELECT title FROM category 
      JOIN film_category 
      ON 
      category.category_id = film_category.category_id
      JOIN film
      ON 
      film_category.film_id = film.film_id 
      WHERE name ILIKE '%${body}%';`, 
   (err, result) => {
      if (err) {
         console.log(err)
         res.status(500).json({message: "Internal Server Error"})
      }
      const data = result.rows
      res.status(200).json({
         category: body, 
         film: data})
   })
})

module.exports = router