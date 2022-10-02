const {Router} = require("express")

const router = Router()

router.get("/", (req, res)=>{res.render("index", {title: "mainPage"})})
router.get("/create", (req, res)=>{res.render("create", {title: "createPage"})})

module.exports = router