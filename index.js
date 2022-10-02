const express = require("express");
const mongoose  = require("mongoose");
const todoRoutes = require("./routes/routes")

require("dotenv").config();

const exphbr = require("express-handlebars")

const hbs = exphbr.create({
    defaultLayout: 'main',
    extname: "hbs"
})

const PORT = process.env.PORT || 3000;

const app = express();

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")

app.use(todoRoutes)

async function start(){
    try {
        await mongoose.connect("mongodb+srv://User2507:qwerty12345@cluster0.rbvei.mongodb.net/todosCollection")
        .then(()=>console.log("Mongo has been started"))
        .catch(e=>console.log(e))
    } catch (error) {
        console.log(error)
    }
}
start()
app.listen(PORT, ()=>{console.log(`Server has been started on port: ${PORT}`)})