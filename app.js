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
//view engine setup
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



//get Image tags via alchamy vision + Elastic search
app.post('/getPlaces', function(req, res) {

	var api_key="c65c36e872835a72165e4fa495b337c48e9a255a";	
	var outputMode="json";
	var image_url=req.param('image_url');


	var alchamy_api_call="http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?apikey="+api_key+"&outputMode="+outputMode+"&url="+image_url;


	var elastic_url="http://hsg0hsxmx0:4mvnh7qyaw@destinations-6367418554.us-east-1.bonsai.io/travel/place/_search"

	var lat=req.param('lat');
	var lon=req.param('lon');
	var radius=req.param('radius');

	console.log(alchamy_api_call)


	request( alchamy_api_call, function (error, response, body) {

		console.log(body)

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

				if(tags=="NO_TAGS"){
					
					var msg={
							err:" No result found for uploaded image"
					}
					res.send(msg)
				}
					
					
				var elasticApiBody ={
					"from" : 0, "size" : 20,
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
                console.log(elasticApiBody);
                
				request( elastic_url,{ json: true, body: elasticApiBody }, function (eerror, eresponse, ebody) {
                    console.log(eresponse)
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


//Get Weather Forcast

app.get('/getWeatherForecast',function(req,res){
	
//		var lat="15.5676973"
//		var lon="73.8904198"
		var lat=req.param('lat');
		var lon=req.param('lon');
		var days=req.param('days');
		var appid="44db6a862fba0b067b1930da0d769e98"
	
	var weatherForecastUrl="http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&mode=json&units=metric&cnt="+days+"&appid="+appid

	request(weatherForecastUrl , function (error, response, body) {

		if (!error && response.statusCode == 200) {

			res.send(body)
		}
	})
});



//Get Wikipedia info of place
app.get('/getWikiInfo',function(req,res){
	
	
	
	var lat=req.param('lat')
	var lon=req.param('lon')
	//var n=lon.indexOf(".");
	//lon=lon.substring(0,n+2);
	
	var url="https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord="+lat+"%7C"+lon+"&format=json"
	request(url , function (error, response, body) {

		console.log(url)
		if (!error && response.statusCode == 200) {

			
			
			var responseJson=JSON.parse(body);
			
			if(responseJson.query.geosearch[0]!=undefined){
			var title=responseJson.query.geosearch[0].title
			
			if(title=="Bigg Boss 2")
				title="Lonavla"
					
					
			var wikipediaUrl="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+title

			
			console.log(wikipediaUrl)
			request(wikipediaUrl , function (error, response, body) {

				if (!error && response.statusCode == 200) {

					res.send(body)
				}
			})
		}
			else
				{
				var msg={
						err:" No Info Available "
				}
				res.send(msg)
				}
		}
	})
	
	
	
	
	
	
	
	
	
//	var title=req.param('title')
//	
//	var wikipediaUrl="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+title
//
//	request(wikipediaUrl , function (error, response, body) {
//
//		if (!error && response.statusCode == 200) {
//
//			res.send(body)
//		}
//	})
});

//Get Tweets of place
app.get('/getTweets',function(req,res){
	
	var place=req.param('place')
	
	var twitterUrl="https://989dcee3-da87-428d-a55e-2990c47d14c4:MQ4il8kVQS@cdeservice.eu-gb.mybluemix.net:443/api/v1/messages/search?q="+place;

	request(twitterUrl , function (error, response, body) {

		if (!error && response.statusCode == 200) {

			res.send(body)
		}
	})
});



//Concept Expansion
app.get('/expandConcepts',function(req,res){
	
	var lat=req.param('lat')
	var lon=req.param('lon')
	var radius=req.param('radius')
	var tags=req.param('tags')
		
	var url = "http://news-api-wrapper.mybluemix.net/expandconcept?tags="+tags+"&lat="+lat+"&lon="+lon+"&radius="+radius
	
	
	console.log(url)
	request( url, function (error, response, body) {

//		console.log(response)
		if (!error && response.statusCode == 200) {
			var responseJson=JSON.parse(body);
			if(responseJson.error==undefined)
			res.send(body)
			else
				{
				
				var dummy=
						{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"failed":0},"hits":{"total":72,"max_score":0.055228762,"hits":[{"_index":"travel","_type":"place","_id":"AVLB9aMQv7Th2BxJqcp2","_score":0.055228762,"_source":{"name": "Chapora", "tags": ["nature", "sky", "mountain"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chapora_fort_elevatons.JPG/200px-Chapora_fort_elevatons.JPG", "wikipedia": "https://en.wikipedia.org/wiki/List_of_beaches_in_India", "source": "wikimedia commons", "location": {"lat": 15.2993265, "lon": 74.12399599999999}}},{"_index":"travel","_type":"place","_id":"AVLCRtTZv7Th2BxJqc-4","_score":0.047338936,"_source":{"name": "ChorlaGhat", "tags": ["nature", "sky", "mountain", "sunset"], "image": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12628112_1702911649955865_1674762133_n.jpg", "source": "instagram", "location": {"lat": 15.61342898, "lon": 74.073780197}, "additonal_tags": ["goa", "india", "chorlaghat", "goasunset", "sunset"], "thumbnail": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12628112_1702911649955865_1674762133_n.jpg", "likes_count": 43}},{"_index":"travel","_type":"place","_id":"AVLB7XrSv7Th2BxJqcmQ","_score":0.021004887,"_source":{"name": "Calvim, Goa", "tags": ["lake"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Calvim_backwater.JPG/200px-Calvim_backwater.JPG", "wikipedia": "", "source": "wikimedia commons", "location": {"lat": 15.5676973, "lon": 73.8904198}}},{"_index":"travel","_type":"place","_id":"AVLB7STUv7Th2BxJqcmH","_score":0.018379277,"_source":{"name": "Calvim, Goa", "tags": ["duck", "lake", "swan", "water", "river"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Calvim_ferry.JPG/200px-Calvim_ferry.JPG", "wikipedia": "", "source": "wikimedia commons", "location": {"lat": 15.5676973, "lon": 73.8904198}}},{"_index":"travel","_type":"place","_id":"AVLB9WCYv7Th2BxJqcpu","_score":0.018379277,"_source":{"name": "Chapora", "tags": ["lake"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chapora_Boat_Trip_2.jpg/200px-Chapora_Boat_Trip_2.jpg", "wikipedia": "https://en.wikipedia.org/wiki/List_of_beaches_in_India", "source": "wikimedia commons", "location": {"lat": 15.2993265, "lon": 74.12399599999999}}},{"_index":"travel","_type":"place","_id":"AVLB9xD0v7Th2BxJqcqg","_score":0.018379277,"_source":{"name": "Colvale", "tags": ["boat", "lake"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Colvale_Fishing.JPG/200px-Colvale_Fishing.JPG", "wikipedia": "https://en.wikipedia.org/wiki/Colvale", "source": "wikimedia commons", "location": {"lat": 15.2993265, "lon": 74.12399599999999}}},{"_index":"travel","_type":"place","_id":"AVLB7c8qv7Th2BxJqcmZ","_score":0.015753664,"_source":{"name": "Canacona", "tags": ["lake"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Goa_2010_%285226315825%29.jpg/200px-Goa_2010_%285226315825%29.jpg", "wikipedia": "https://en.wikipedia.org/wiki/Canacona", "source": "wikimedia commons", "location": {"lat": 14.9931145, "lon": 74.04763779999999}}},{"_index":"travel","_type":"place","_id":"AVLB9Rbhv7Th2BxJqcpl","_score":0.013128054,"_source":{"name": "Cavelossim", "tags": ["lake"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/F%C3%A4hre_Cavelossim-Assolna_%284248310630%29.jpg/200px-F%C3%A4hre_Cavelossim-Assolna_%284248310630%29.jpg", "wikipedia": "https://en.wikipedia.org/wiki/Cavelossim", "source": "wikimedia commons", "location": {"lat": 15.2993265, "lon": 74.12399599999999}}},{"_index":"travel","_type":"place","_id":"AVLB_ZLKv7Th2BxJqctr","_score":0.012337278,"_source":{"name": "Panaji", "tags": ["nature", "sky", "landscape"], "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/PANJI.JPG/200px-PANJI.JPG", "wikipedia": "https://en.wikipedia.org/wiki/Panaji", "source": "wikimedia commons", "location": {"lat": 15.2993265, "lon": 74.12399599999999}}},{"_index":"travel","_type":"place","_id":"AVLCRZ-bv7Th2BxJqc-J","_score":0.011563545,"_source":{"name": "Keri Beach, Goa", "tags": ["sky", "nature"], "image": "https://scontent.cdninstagram.com/t51.2885-15/e15/10954580_1609642509271093_1467014135_n.jpg", "source": "instagram", "location": {"lat": 15.707766257, "lon": 73.693428503}, "additonal_tags": ["www", "\u0433\u043e\u0430", "underkeri", "underjungle", "vmestevputi", "goasky", "\u043a\u0435\u0440\u0438", "high", "\u0432\u044b\u0441\u043e\u043a\u043e", "\u0441\u0432\u043e\u0431\u043e\u0434\u0430", "air", "underrock", "fly", "\u043f\u0430\u0440\u0430\u043f\u043b\u0430\u043d", "\u0432\u043c\u0435\u0441\u0442\u0435\u0432\u043f\u0443\u0442\u0438", "freedom", "goa", "\u043f\u043e\u043b\u0451\u0442", "\u043f\u0430\u0440\u0430\u043f\u043b\u0430\u043d\u0435\u0440\u0438\u0441\u0442\u044b", "paraglider", "\u0438\u043d\u0434\u0438\u044f2015", "keri", "wing", "wind", "\u043d\u0435\u0431\u043e\u0433\u043e\u0430"], "thumbnail": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e15/10954580_1609642509271093_1467014135_n.jpg", "likes_count": 33}}]}}
				
				res.send(dummy)
				}
				
		}
	})
	
});


//Get News
app.get('/getNews',function(req,res){
	
	var tags=req.param('tags')
	var place=req.param('place')
	var days=req.param('days')
		
	var url = "http://news-api-wrapper.mybluemix.net/news?tags="+tags+"&place="+place+"&days="+days
	
	console.log(url)
	request( url, function (error, response, body) {

//		console.log(response)
		if (!error && response.statusCode == 200) {

			res.send(body)
		}
	})
	
});


//Image Gallery
app.get('/getImageGallery',function(req,res){
	
	var lat=req.param('lat')
	var lon=req.param('lon')
	var count=req.param('count')
		
	var url = "http://api.instagram.com/v1/media/search?lat="+lat+"&lng="+lon+"&access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587&count="+count
	
	console.log(url)
	request( url, function (error, response, body) {

//		console.log(response)
		if (!error && response.statusCode == 200) {

			res.send(body)
		}
	})
	
});


//Rekkie Score
app.get('/getRekkieScore',function(req,res){
	
	var lat=req.param('lat')
	var lon=req.param('lon')
	
	var latlon=lat+","+lon
	var url = "http://api.foursquare.com/v2/search/recommendations?locale=en&explicit-lang=false&v=20160204&m=foursquare&mode=locationInput&limit=1&intent=bestnearby&ll="+latlon+"&wsid=XA0G4KBUTUYJC4E0Z5GQUV01ZXIOYQ&oauth_token=KSMXC2ZBCUY1Z4BULVIJ2FPGIYPJHEG42I4NAODKL2XC4BBQ"
	
	console.log(url)
	request( url, function (error, response, body) {

//		console.log(response)
		if (!error && response.statusCode == 200) {

			var responseJson=JSON.parse(body);
			var score={
					score :parseFloat(responseJson.response.group.results[0].venue.rating)*10
			}
			
			res.send(score)
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

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});



module.exports = app;
