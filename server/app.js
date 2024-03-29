const express = require("express")
const cors = require("cors")
const collection = require("./mongo")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.post("/data", async (req, res) => {
    const {name} = req.body
    const {email} = req.body
    const {loaction} = req.body
    const {message} = req.body

    const details = {
        name:name,
        email:email,
        loaction:loaction,
        message:message
    }

    await collection.insertMany([details])
})

const PORT=3000

app.listen(PORT, () => {
    console.log(`The Port is Connected ${PORT}`);
})