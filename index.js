import express from "express"
const app = express()

const PORT = 3000
const users = [{ username1: "kaneezfatima", 
    email: "hafizakaneezfatima.04@gmail.com"
 },
  {
    username2: "fatima", 
    email: "kaneezfatima.04@gmail.com"
}]


app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/users", (req, res) => {
    res.send(users)
})

app.listen(PORT, () => (
    console.log("server is running on " + PORT
    )
))