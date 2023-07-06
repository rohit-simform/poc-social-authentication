require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 80 ;

routes(app)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
