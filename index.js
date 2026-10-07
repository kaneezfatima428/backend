import express from "express"
const app = express()

const PORT = 3000
const users = [{ id:1, username: "kaneezfatima", 
    email: "hafizakaneezfatima.04@gmail.com"
 },
  {  id:2,
    username: "fatima", 
    email: "kaneezfatima.04@gmail.com"
}]

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})
app.post("/users",(req,res) => {
    users.push(req.body)
    res.send("user registered succesfully")
})
app.get("/users", (req, res) => {
    res.send(users)
})
app.delete("/users/:id", (req, res) => {
   const index = users.findIndex(v => v.id === Number(req.params.id))
   users.splice(index,1)
   res.send("user delete")
});
app.put("/users/:id", (req, res) => {
   const index = users.findIndex(v => v.id === Number(req.params.id))
   users.splice(index,1,{id:Number(req.params.id),...req.body})
   res.send("user updated")
});


app.listen(PORT, () => (
    console.log("server is running on " + PORT
    )
))