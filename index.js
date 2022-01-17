require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index.js');
const sequelize = require('./db');
const errorMiddleware = require('./middlewares/errorMiddleware.js');

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch(e) {
    console.log(`Подключенние не удалось, ошибка: ${e}`);
  }

   
   app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
   })
}

start()