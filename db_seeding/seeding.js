const pool = require('../config/query.js')
const fs = require('fs')

const seedingQuery = fs.readFileSync('db_seeding/seeding.sql', 'utf-8');
pool.query(seedingQuery, (err, res) => {
   if(err){
      console.log(err)
   } else {
      console.log('Seeding success')
      pool.end()
   }
})