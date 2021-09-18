const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const date = require(__dirname + '/day.js');


let items = ["Coffee", "Eggs"];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

  res.render("list", {day: date(), newListItems: items});
});


app.post("/", function(req, res){
  let item = req.body.listItem;

  items.push(item);
  res.redirect("/")

});

app.listen(port, function() {
  console.log("Server started at port 4000");
});
