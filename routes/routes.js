const express = require('express');

// essentials

const router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

// unique user id
const { v4: uuidv4 } = require('uuid');


// for file uploads
var multer = require('multer');
var uploadDestination = multer({dest: 'public/images'});
var uniqid = require('uniqid');
var fs = require('fs');

//mongodb database

var pug = require('pug');

// session variables

var session_username;



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));   


router.use(cookieParser());

// mongodb credentials

let MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://harmantiwana:manwar123@cluster0.nmhm9.mongodb.net/<dbname>?retryWrites=true&w=majority"


// register route

router.post('/user/register', (req,res) => {
    // validate
    var iusername = req.body.username;
    var ipassword = req.body.password;

    if(iusername != "" || ipassword != "") {

        MongoClient.connect(url, function(err, db) {
            if(err) throw err;
        
            var dbo = db.db("users");
        
            dbo.collection("user").insertOne({
                ID: uuidv4(),
                accounttype: 'Standard',
                avatar: "",
                username: iusername,
                password: ipassword
            },
            function(err, result) {
                if(err) throw err;
                console.log(result);
                db.close();
            }
            )
        });
    
        res.send('Register Recieved!, you may now go back to the panel to login.');
    } else {
        res.send('Please enter valid fields.');
    }

   

});   

// login route


router.post('/user/login', (req, res) => {
    // check if user and password is correct
    var iusername = req.body.username;
    var ipassword = req.body.password;
   
    // set our global session variable
    session_username = iusername;
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
    
        var dbo = db.db("users");
    
        dbo.collection("user").findOne({
           username: iusername,
           password: ipassword
        },
        function(err, result) {
            if(result) {
                res.redirect('http://' + req.headers.host + "/setcookies");
            } else {
                res.send('Invalid login credentials. Please go back and try again!');
            }
           
        
            db.close();
        }
        )
    });

});

//set cookies then send to home panel
router.get('/setcookies', (req,res) => {
    res.cookie('username', session_username, {httpOnly: false});
    res.render('enablecookies', {
        username: session_username
    })
  
  
});

// home panel


router.get('/user/panel/:username', (req, res) => {
   // check if user actually logged in correctly.
  
    // query the database, then send the data into the render
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("posts");

        dbo.collection("post").find({}).toArray(function(err, result) {
          
            console.log(result);
            if(req.cookies) {
                res.render('home', {
                    username: req.params.username,
                    posts: result
                });
           } else {
                res.render('error');
           }
        });
        
    });

  
   
});

// user settings

router.get('/user/panel/:username/profile/settings', (req, res) => {
    res.render('usersettings', {
        username: req.cookies.username
    });
});

// listing page & create listing

router.get('/user/panel/:username/createlisting', (req, res) => {
    res.render('listingcreate', {
        username: req.params.username
    });
});

router.post('/user/:username/createlisting', uploadDestination.single('photo'), (req, res) => {
    // connect to database and add
    // grab post title and message
    var postTitle = req.body.title;
    var postMessage = req.body.message;

    console.log('File name: ' + req.file.filename);
    // change filename
    var nfilename = uniqid() + '.png';
   
    fs.rename('public/images/'+req.file.filename, 'public/images/'+nfilename, (err) => {
        if(err) {
            console.log('error renaming');
        } else {
            console.log('renamed')  
        }
        
    });

    // grabbing date information, then piecing together
    var d = new Date(); 
    
    var day, dayOfMonth, month, year;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = days[d.getDay()];

    dayOfMonth = d.getDate();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = months[d.getMonth()];

    year = d.getFullYear();

    var date = "Posted on " + day + " " + month + " " + dayOfMonth + ", " + year;
    

    // finally, post to database
    
    
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
    
        var dbo = db.db("posts");
    
        dbo.collection("post").insertOne({
            Author: req.cookies.username,
            listingTitle: postTitle,
            postMessage: postMessage,
            fileImageName: nfilename,
            timeOfPost: date

        },
        function(err, result) {
            if(err) throw err;
            
            db.close();
        }
        )
    });
    
    res.redirect('/post?=success');
});  

router.get('/post', (req, res) => {
    res.render('postcreated', {
        username: req.cookies.username
    });
});

// delete pos
router.post('/post/delete/:postimageID', (req, res) => {
    var postImageId = req.params.postimageID;

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("posts");
        dbo.collection("post").deleteOne({
            fileImageName: postImageId
        },
        function(err, result) {
            if(err) throw err;
            res.render('postdeleted', {
                username: req.cookies.username
            })
            db.close();
        }
        )
     
        });
});


// upload avatar

/*
router.post('/uploadavatar', uploadDestination.single('photo'), (req, res) => {
    
    // change filename
    var nfilename = uuidv4() + '.png';
   
    fs.rename('C:/Users/Harman/Desktop/2107 Project/public/images/'+req.file.filename, 'C:/Users/Harman/Desktop/2107 Project/public/images/'+nfilename, (err) => {
        if(err) {
            console.log('error renaming');
        } else {
            console.log('renamed')  
        }
        
    });

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("users");
        dbo.collection("user").updateOne({
           username: req.cookies.username,
           avatar: nfilename
        },
        function(err, result) {
            if(err) throw err;
            
            res.render('avatarupdated', {
                username: req.cookies.username
            })
            db.close();
        }
        )
     
        });
});

*/
// logout route

router.post('/logout', (req, res) => {
    //clear cookies and redirect
    res.clearCookie('username');
    session_username = "";
    res.redirect('/');
});







 
module.exports = router;