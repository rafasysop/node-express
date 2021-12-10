const express = require('express')

const app = express()

app.listen(3010, ()=> console.log('servidor rodando : http://localhost:3010'))

app.get('/', (req, res) => {

  return res.send('Server Ok')
})