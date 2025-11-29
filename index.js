require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res) => {
    res.send('This is facebook page')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur coffee<h1/>')
})
app.get('/youtube',(req,res)=>{
    res.send('<p>do not open this window</p>')
})

app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`)
})
