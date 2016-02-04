var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();
var request = require('request');
var https = require('https')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/index', function(req, res) {
	  res.render('index');
});


app.post('/getPlaces', function(req, res) {

var api_key="c65c36e872835a72165e4fa495b337c48e9a255a";	
var outputMode="json";
var image_url=req.param('image_url');


var alchamy_api_call="http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?apikey="+api_key+"&outputMode="+outputMode+"&url="+image_url;


var elastic_url="http://3mz238its1:o88k4l37cy@travel-5358787552.ap-southeast-2.bonsai.io/travel/place/_search"

var lat=req.param('lat');
var lon=req.param('lon');
var radius=req.param('radius');

console.log(alchamy_api_call)


request( alchamy_api_call, function (error, response, body) {

   console.log(response)

    if (!error && response.statusCode == 200) {

	var responseJson=JSON.parse(body);
	   var status=responseJson.status;
	if(status=="OK"){

	var tags="";
	for(var i in responseJson.imageKeywords){
		tags=tags+responseJson.imageKeywords[i].text
		if(i<responseJson.imageKeywords.length-1)
			tags=tags+","
	}
console.log(tags)

var elasticApiBody ={
    "query": {
        "filtered" : {
            "query" : {
                "query_string" : {
                    "query" : tags
                }
            },
            "filter":{  
            "geo_distance":{  
               "distance":radius+"km",
               "location":{
            "lat" : lat,
            "lon" : lon
        }
            }
         }
        }
    }
}
 
request( elastic_url,{ json: true, body: elasticApiBody }, function (eerror, eresponse, ebody) {

  if (!eerror && eresponse.statusCode == 200) {

	res.send(ebody)
}
})
    //res.send(responseJson);

	}
	else
	res.send("Unsupported media");
     }
else{
res.send("Error");
}
})

});

//app.use('/index', routes);
//app.use('/users', users);
app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
