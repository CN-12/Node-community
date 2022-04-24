const express = require("express")
const mongoose = require("mongoose")

const app = express()

const {Tosay} = require("./model/some")

app.use(express.urlencoded({ extended: false }))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// app.get('/:name', (req, res) => {
//     res.render('name', {
//         name: req.params.name
//     })
//     console.log(req.params.name)
// }) //어디 라우터에 접속했는지 알수있다.

const link = ""
    mongoose.connect(link, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/add', (req, res) => {
    console.log(req.body.content)
    const tosay = new Tosay({
        content : req.body.content
    })
            tosay.save((err, Info) => {
                if(err) throw err
                else res.redirect("/list")
            }) 
})

app.get('/list', async(req, res) => {
    const all = await Tosay.find();
    console.log(all)
    res.render("list", {
        array: all
    })
})

app.listen(8080, () => {
    console.log("서버가 열림")
})

