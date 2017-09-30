import express from "express"
import bodyParser from "body-parser"
import routeApi from "./routes/api"

const app = express()
const port = 3000

// Express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", routeApi)



app.listen(port)
console.log(`listening on port ${port}`)
