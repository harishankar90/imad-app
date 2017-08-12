var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne={
title : 'Article-1 | Harishnkar',
heading: 'Article-1',
date: 'August 11,2017',
content : `<p>
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
            </p>
        </div>
         <div>
            <p>
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
            </p>
        </div>
         <div>
            <p>
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
                This is my Content for Article-1 ;)This is my Content for Article-1 ;)This is my Content for Article-1 ;)
            </p>`
    
};


var htmlTemplate =`


<html>
    <head>
        <title>
            Article-1 | Harishankar 
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="Container">
        <div>
            <a href="/">HOME</a>
        </div>
        <h3>
            Article One
        </h3>
        <div>
            August 11,2017
        </div>
        <div>
            
        </div>
    </body>
</html>

`;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
    
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-2.html')); 
   
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-3.html')); 
   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
