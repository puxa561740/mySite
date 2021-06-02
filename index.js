const express = require('express')
const config = require('config')

const app =  express()

app.use(express.json({extended: true}))

const PORT = config.get('port') || 5000 

async function start () {
  try{
    app.listen(PORT,()=>{
      console.log(`App has been started on port ${PORT}...`)
    })
  } catch (e) {
    console.log(`Server Error`, e.massage)
  }
}

start()