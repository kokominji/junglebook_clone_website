const express = require('express')
const db = require('./config/db.js')
const app = express()
const port = 4000

//http://localhost:4000/
app.get('/', (req, res) => { 
  res.send('Hello World!') //클라이언트 에게 응답
})

//http://localhost:4000/users
app.get('/users', (req, res) => { 
    //연결된 DBMS에 쿼리문을 날리고 응답을 콜백함수 매개변수 2번째값이 받는다.
    db.query('select * from people', (err,data) => {
        res.send(data) //클라이언트 에게 응답
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})