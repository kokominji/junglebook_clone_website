const express = require('express')
const app = express()
const port = 4000

//http://localhost:4000/
app.get('/', (req, res) => { 
  res.send('Hello World!') //클라이언트 에게 응답
})

//http://localhost:4000/users
app.get('/users', (req, res) => { 
  res.send('Users Response!') //클라이언트 에게 응답
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})