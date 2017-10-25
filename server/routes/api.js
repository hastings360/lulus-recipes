const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: '/tmp/'})

const nodemailer = require('nodemailer');//mail API
const MongoClient = require('mongodb').MongoClient;//db API
const url = "mongodb://localhost:27017/lulus-recipes";//db API
let data;//db API

//root APi 
router.get('/', (req, res) => {
  res.send('lulus-recipe api works');
});

//mail API
router.post('/recipe-mail', upload.single('image'),(req, res) =>{
  res.send('recipe-mail api works');
  console.log('recipe-mail accessed');
  
  let mailData = JSON.parse(req.body.data);//form data: transforms JSON string back to object
  let imageFile = req.file;//attachment file
  
  SendMyMail(mailData,imageFile);
});
              //reusable transporter object for mail
              const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: 'hastingsserve@gmail.com',
                  pass: '577061Ha!'
                }
              });
              //send mail using the object passed in
              function SendMyMail(data,file){
                //iterates through contents and assigns string value to contents variable
                let contents;
                for(let y in data){
                  contents += ("<p>" + data[y] + "</p>");
                };
                //email data
                let mailOptions;  //code sets value according to attachment being present or not
                if(file == undefined){
                  mailOptions = {
                    to: 'hastings360@gmail.com', 
                    html: "<h1>Lulu's Recipe Message</h1>" + contents
                    };
                  }else{
                    mailOptions = {
                      to: 'hastings360@gmail.com', 
                      html: "<h1>Lulu's Recipe Message</h1>" + contents,
                      attachments: [{filename: file.originalname,path: file.path}]
                    };
                  }
                //sends
                transporter.sendMail(mailOptions,(error,info) =>{
                  if(error){
                    return console.log(error);
                  }else{
                    console.log('Email Sent');
                  }
                });
              }

//favorites database query API
router.get('/recipe-favorites', (req, res) =>{
  console.log('recipe-favorties queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({}).sort({likes: -1}).limit(3).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//top ten categories database query API
router.get('/recipe-top-ten-categories', (req, res) =>{
  console.log('recipe-top-ten-categories queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").aggregate([
      {$sort: {likes: -1}},
      {$group: {_id: "$category", unique: {$addToSet: "$category"}}},
      {$limit:10}
    ]).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//all categories database query API
router.get('/recipe-all-categories', (req, res) =>{
  console.log('recipe-all-categories queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({},{ category: 1,_id: 0}).sort({category: 1}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//meals by category database query API
router.get('/recipe-meals-by-category',(req, res) =>{
  console.log('recipe-meals-by-category queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({category: req.query.category}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//meal by name database query API
router.get('/recipe-meal-by-name',(req, res) =>{
  console.log('recipe-meal-by-name queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({name: req.query.name}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//search query database API
router.get('/query-search-by-input',(req, res) =>{
  console.log('query-search-by-input queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({ $text: { $search: req.query.searchText}}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//increase likes by mealID
router.post('/increase-likes',(req, res) =>{
  console.log('increase-likes accessed');
  console.log(req.body);
  


  /*MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.meals.findAndModify({query:{_id: req.query.mealID},update:{$inc:{likes:1}}}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });*/
});
            
module.exports = router;