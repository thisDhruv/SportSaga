const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const { v4: uuid } = require("uuid");
uuid();
const override = require("method-override");
app.use(override("_x"));
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/allinfo', { useNewUrlParser: true })
    .then(() => {
      console.log("CONNECTION OPEN");
    })
    .catch((e) => {
      console.log("OH NO ERROR!!!", e);
    })

}
const data = new mongoose.Schema({

  fname: String,
  lname: String,
  uname: String,
  email: String,
  password: String
});
const information = mongoose.model("info", data);


const c = new mongoose.Schema({

  id: String,
  uname: String,
  comment: String
});
const comment = mongoose.model("comment", c);

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
})
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/sign.html");
})
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
})
app.get("/cricket", (req, res) => {
  res.sendFile(__dirname + "/public/cricket.html");
})
app.get("/football",(req,res)=>{
  res.sendFile(__dirname + "/public/football.html");
})
app.get("/cricket/result",(req,res)=>{
  res.sendFile(__dirname + "/public/result.html");
})
app.get("/football/ranking",(req,res)=>{
  res.sendFile(__dirname + "/public/footballRanking.html");

})
app.get("/football/news",(req,res)=>{
  res.sendFile(__dirname + "/public/news.html");

})

app.get("/comments", (req, res) => {
  comment.find({}, function (err, details) {
    if (err) {
      console.log(err);
    } else {
      res.render("allcomments", { details: details })
    }
  })
})
app.get("/comments/new", (req, res) => {
  res.render("newcomment",{});
})

app.get("/comments/:id1/edit", (req, res) => {
  const { id1 } = req.params;
  comment.findOne({ id: id1 }, function (err, details) {
    if (err) {
      console.log(err);
    } else {
      res.render("editcomment", { details: details })
    }
  })
})

app.post("/signup", (req, res) => {
  var fName = req.body.fname;
  var lName = req.body.lname;
  var uName = req.body.username;
  var eMail = req.body.email;
  var pas = req.body.password;
  var u1 = new information({ fname: fName, lname: lName, uname: uName, email: eMail, password: pas });
  u1.save();
  res.redirect("public/sucess.html")


})

app.post("/cricket",(req,res)=>{
  var url=req.body.url;
  res.render("cricket",{url})
  
})
app.post("/login", (req, res) => {
  var uname = req.body.username;
  var pas = req.body.password;
  information.findOne({ uname: uname, password: pas }, (err, detail) => {
    if (detail === null)
      res.render("login", { detail: detail });
    else{
      res.render("index", { detail: detail });
      // var username=uname;
      // window.localStorage.setItem("uname", username);
        // window.location.href="index.html";
    }
     

  });


})

app.post("/comments", (req, res) => {
  var uName = req.body.uname;
  var commentu = req.body.comment;

  var v1 = new comment({ uname: uName, comment: commentu, id: uuid() });
  v1.save();
  res.redirect("http://localhost:3004/comments")


})
// app.post("/comments/new",(req,res)=>{
//   var uname=req.body.uname;
//   res.render("allcomments",{uname});


// })
app.patch("/comments/:id1", (req, res) => {
  var { id1 } = req.params;
  comment.updateOne({ id: id1 }, { $set: { comment: req.body.comment } }, (err, details) => {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect("/comments");
    }
  })

  app.delete("/comments/:id1", (req, res) => {
    var { id1 } = req.params;
    comment.deleteOne({ id: id1 }, (err, x) => {
      if (err)
        console.log("ERROR")
      else
        res.redirect("/comments");
    })


  })

})

app.listen(3004, () => {
  console.log("Server is connected to port 3004");

})