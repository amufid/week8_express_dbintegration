const express = require('express')
const films = require('./routes/films.js')
const categories = require('./routes/categories.js')
const relation = require('./routes/relation.js')

const app = express()
const PORT = 3000

app.use('/films', films)
app.use('/categories', categories)
app.use('/relation', relation)

app.listen(PORT, () => {
   console.log(`Server running port ${PORT}`)
})