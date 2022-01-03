const express = require("express")
const sequelize = require("./config/db.config")
const Hewan = require("./models/hewan")
const router = require("./routes")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .then(() => {
        Hewan.sync().then(() => console.log("table created"))
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});