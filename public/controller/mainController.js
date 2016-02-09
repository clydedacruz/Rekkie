angular.module('rekkie').controller('mainController',
		[ '$scope', '$timeout','$rootScope','$http','$document','$animate', function($scope, $timeout,$rootScope,$http,$document,$animate) {
			
			 $scope.myInterval = 2000;
			 $scope.noWrapSlides = false;
			
			//whether meter
			$scope.CurrentWeather = {
					Clear : {
						icon : "clear-day",
						iconSize : 50,
						color : "blue",
						animated:true
					},
					Mist : {
						icon : "cloudy",
						iconSize : 50,
						color : "blue",
						animated:true
					},
					Rain : {
						icon : "rain",
						iconSize : 50,
						color : "blue",
						animated:true
					},
					Storm : {
						icon : "wind",
						iconSize : 50,
						color : "blue",
						animated:true
					},
					Snow : {
						icon : "snow",
						iconSize : 50,
						color : "blue",
						animated:true
					},
					Extreme : {
						icon : "fog",
						iconSize : 50,
						color : "blue",
						animated:true
					}

			};

			
			
//			 $scope.slides =  [
//			                   {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB9aMQv7Th2BxJqcp2",
//			                       "_score": 0.02572014,
//			                       "_source": {
//			                         "name": "Chapora",
//			                         "tags": [
//			                           "nature",
//			                           "sky",
//			                           "mountain"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chapora_fort_elevatons.JPG/200px-Chapora_fort_elevatons.JPG",
//			                         "wikipedia": "https://en.wikipedia.org/wiki/List_of_beaches_in_India",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.2993265,
//			                           "lon": 74.12399599999999
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLCRtTZv7Th2BxJqc-4",
//			                       "_score": 0.022045834,
//			                       "_source": {
//			                         "name": "ChorlaGhat",
//			                         "tags": [
//			                           "nature",
//			                           "sky",
//			                           "mountain",
//			                           "sunset"
//			                         ],
//			                         "image": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12628112_1702911649955865_1674762133_n .jpg",
//			                         "source": "instagram",
//			                         "location": {
//			                           "lat": 15.61342898,
//			                           "lon": 74.073780197
//			                         },
//			                         "additonal_tags": [
//			                           "goa",
//			                           "india",
//			                           "chorlaghat",
//			                           "goasunset",
//			                           "sunset"
//			                         ],
//			                         "thumbnail": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12628112_1702911649955865_1674762133_n.jpg",
//			                         "likes_count": 43
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB7XrSv7Th2BxJqcmQ",
//			                       "_score": 0.019795021,
//			                       "_source": {
//			                         "name": "Calvim , Goa",
//			                         "tags": [
//			                           "lake"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Calvim_backwater.JPG/200px-Calvim_backwater.JPG",
//			                         "wikipedia": "",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.5676973,
//			                           "lon": 73.8904198
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB7STUv7Th2BxJqcmH",
//			                       "_score": 0.017320642,
//			                       "_source": {
//			                         "name": "Calvim, Goa",
//			                         "tags": [
//			                           "duck",
//			                           "lake",
//			                           "swan",
//			                           "water",
//			                           "river"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Calvim_ferry.JPG/200px-Calvim_ferry.JPG",
//			                         "wikipedia": "",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.5676973,
//			                           "lon": 73.8904198
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB9WCYv7Th2BxJqcpu",
//			                       "_score": 0.017320642,
//			                       "_source": {
//			                         "name": "Chapora",
//			                         "tags": [
//			                           "lake"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chapora_Boat_Trip_2.jpg/200px-Chapora_Boat_Trip_2.jpg",
//			                         "wikipedia": "https://en.wikipedia.org/wiki/List_of_beaches_in_India",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.2993265,
//			                           "lon": 74.12399599999999
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB9xD0v7Th2BxJqcqg",
//			                       "_score": 0.017320642,
//			                       "_source": {
//			                         "name": "Colvale",
//			                         "tags": [
//			                           "boat",
//			                           "lake"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Colvale_Fishing.JPG/200px-Colvale_Fishing.JPG",
//			                         "wikipedia": "https://en.wikipedia.org/wiki/Colvale",
//			                         "source": "wikimedia  commons",
//			                         "location": {
//			                           "lat": 15.2993265,
//			                           "lon": 74.12399599999999
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB7c8qv7Th2BxJqcmZ",
//			                       "_score": 0.014846265,
//			                       "_source": {
//			                         "name": "Canacona",
//			                         "tags": [
//			                           "lake"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Goa_2010_%285226315825%29.jpg/200px-Goa_2010_%285226315825%29.jpg",
//			                         "wikipedia": "https://en.wikipedia.org/wiki/Canacona",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 14.9931145,
//			                           "lon": 74.04763779999999
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB9Rbhv7Th2BxJqcpl",
//			                       "_score": 0.012371887,
//			                       "_source": {
//			                         "name": "Cavelossim",
//			                         "tags": [
//			                           "lake"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/F%C3%A4hre_Cavelossim-Assolna_%284248310630%29.jpg/200px-F%C3%A4hre_Cavelossim-Assolna_%284248310630%29.jpg",
//			                         "wikipedia": "https://en.wikipedia .org/wiki/Cavelossim",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.2993265,
//			                           "lon": 74.12399599999999
//			                         }
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLCRXFzv7Th2BxJqc-C",
//			                       "_score": 0.012292415,
//			                       "_source": {
//			                         "name": "Arambol Beach",
//			                         "tags": [
//			                           "beach",
//			                           "ocean",
//			                           "sea",
//			                           "rock"
//			                         ],
//			                         "image": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12552317_463041023887054_1471822679_n.jpg",
//			                         "source": "instagram",
//			                         "location": {
//			                           "lat": 15.6843867,
//			                           "lon": 73.71095602
//			                         },
//			                         "additonal_tags": [
//			                           "\u043d\u0430\u043c\u043e\u0440 \u0435",
//			                           "instasky",
//			                           "\u0433\u043e\u0430",
//			                           "\u0432\u0433\u043e\u0430",
//			                           "wonderfulworld",
//			                           "arambol",
//			                           "goasky",
//			                           "sunsetscape",
//			                           "\u043f\u0435\u0439\u0437\u0430\u0436",
//			                           "instascape",
//			                           "goasunset",
//			                           "landscape",
//			                           "magicsky",
//			                           "arambolsunset",
//			                           "\u043d\u0430\u0437\u0430\u043a\u0430\u0442\u0435",
//			                           "beautifulnature",
//			                           "lovegoa",
//			                           "seascape",
//			                           "\u043c\u043e\u0440\u0435",
//			                           "goa",
//			                           "\u0441\u043a\u0430\u043b\u044b",
//			                           "goa2016",
//			                           "beyoundthesea",
//			                           "\u0437\u0430\u043a\u0430\u0442",
//			                           "\u0430\u0440\u0430\u043c\u0431\u043e\u043b\u044c",
//			                           "naturewonders"
//			                         ],
//			                         "thumbnail": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12552317_463041023887054_1471822679_n.jpg",
//			                         "likes_count": 49
//			                       }
//			                     },
//			                     {
//			                       "_index": "travel",
//			                       "_type": "place",
//			                       "_id": "AVLB_ZLKv7Th2BxJqctr",
//			                       "_score": 0.011626659,
//			                       "_source": {
//			                         "name": "Panaji",
//			                         "tags": [
//			                           "nature",
//			                           "sky",
//			                           "landscape"
//			                         ],
//			                         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/PANJI.JPG/200px-PANJI.JPG",
//			                         "wikipedia": "https://en.wikipedia .org/wiki/Panaji",
//			                         "source": "wikimedia commons",
//			                         "location": {
//			                           "lat": 15.2993265,
//			                           "lon": 74.12399599999999
//			                         }
//			                       }
//			                     }
//			                   ];
//			                


//
//			$scope.slides = [
//			                 {
//			                	 image: 'http://lorempixel.com/400/200/'
//			                 },
//			                 {
//			                	 image: 'http://lorempixel.com/400/200/food'
//			                 },
//			                 {
//			                	 image: 'http://lorempixel.com/400/200/sports'
//			                 },
//			                 {
//			                	 image: 'http://lorempixel.com/400/200/people'
//			                 }
//			                 ];



			$scope.news=[{"url": {"docSentiment": {"score": -0.399913013, "type": "negative"}, "url": "http://timesofindia.indiatimes.com/city/goa/two-unidentified-bodies-found/articleshow/50830873.cms", "title": "Two unidentified bodies found- Times of India"}}, {"url": {"docSentiment": {"score": -0.399913013, "type": "negative"}, "url": "http://timesofindia.indiatimes.com/city/goa/Two-unidentified-bodies-found/articleshow/50830873.cms", "title": "Two unidentified bodies found - Times of India"}}, {"url": {"docSentiment": {"score": 0.388547003, "type": "positive"}, "url": "http://www.lonelyplanet.com/india", "title": "Anjuna & North Goa, India - Lonely Planet"}}];
			//$scope.imagedata={"meta":{"code":200},"data":[{"attribution":null,"tags":["bakery","croissantlover","karma","homemade"],"type":"image","location":{"latitude":15.00526,"name":"Karma cafe+bakery","longitude":74.03156,"id":1027403222},"comments":{"count":0,"data":[]},"filter":"Normal","created_time":"1454906656","link":"https:\/\/www.instagram.com\/p\/BBgydeehEm5\/","likes":{"count":0,"data":[]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12534071_1042171765803117_1400495780_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/c135.0.810.810\/12543396_898085783645602_868017110_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12534071_1042171765803117_1400495780_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454906656","text":"Best breakfast in Patnem \u2615\ufe0f#karma #bakery #croissantlover #homemade","from":{"username":"sunishername","profile_picture":"https:\/\/igcdn-photos-a-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/s150x150\/11326157_497708757052368_641556906_a.jpg","id":"9620273","full_name":"SIRA"},"id":"1180165034144450684"},"user_has_liked":false,"id":"1180165030285691321_9620273","user":{"username":"sunishername","profile_picture":"https:\/\/igcdn-photos-a-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/s150x150\/11326157_497708757052368_641556906_a.jpg","id":"9620273","full_name":"SIRA"}},{"attribution":null,"tags":[],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Rise","created_time":"1454906623","link":"https:\/\/www.instagram.com\/p\/BBgyZa2kM67\/","likes":{"count":1,"data":[{"username":"tatsuyaedward","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xtf1\/t51.2885-19\/11327290_698026963662954_1793975943_a.jpg","id":"46018414","full_name":"EDWARD"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12547176_854690121342978_709025060_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/c0.134.1080.1080\/12628139_1513518668953916_849178979_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12547176_854690121342978_709025060_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":null,"user_has_liked":false,"id":"1180164751516290747_2108916074","user":{"username":"vivin_celestine","profile_picture":"https:\/\/igcdn-photos-g-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/s150x150\/11809754_1127807500581254_1081353597_a.jpg","id":"2108916074","full_name":"Vivin Celestine"}},{"attribution":null,"tags":["india","travel","goa","beer","sunset","beautifulworld","pretty","travelgram"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Normal","created_time":"1454905307","link":"https:\/\/www.instagram.com\/p\/BBgv40FOnhe\/","likes":{"count":29,"data":[{"username":"travelandwildlifephotography","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/10946290_793037257435620_2006402256_a.jpg","id":"1659002888","full_name":"Ray \u0026 Sue"},{"username":"atlasofbeauty","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/s150x150\/12393797_1257605357599322_1549469745_a.jpg","id":"1715140276","full_name":"AtlasofBeauty \ud83c\udf0e\ud83c\udf39"},{"username":"herrwunderbar","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/11049441_482433871904139_1005753611_a.jpg","id":"1783562796","full_name":"\u25c0Karl\u25b6"},{"username":"skullxart","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xpt1\/t51.2885-19\/s150x150\/12530991_218086401861423_1217790081_a.jpg","id":"1698921057","full_name":"\ud83c\udde7\ud83c\uddf3"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12724818_1670075536614432_572880084_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/c0.117.937.937\/12479471_1649194332008039_1223216953_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12724818_1670075536614432_572880084_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454905307","text":"First day back at work and daydreaming about where I was a week ago \u2600\ufe0f\ud83c\udf7a\u2708\ufe0f #india #travel #travelgram #sunset #beer #beautifulworld #goa #pretty","from":{"username":"alanawest","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xtf1\/t51.2885-19\/s150x150\/12558509_1677699209151754_750757338_a.jpg","id":"24938741","full_name":"ALANA WEST \ud83d\udc8b"},"id":"1180153716615575663"},"user_has_liked":false,"id":"1180153714770081886_24938741","user":{"username":"alanawest","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xtf1\/t51.2885-19\/s150x150\/12558509_1677699209151754_750757338_a.jpg","id":"24938741","full_name":"ALANA WEST \ud83d\udc8b"}},{"attribution":null,"tags":["gosuhorukovs"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":5,"data":[{"created_time":"1454904250","text":"\u0412\u044b \u043f\u0440\u0438\u0436\u0438\u043b\u0438\u0441\u044c \u0442\u0430\u043c \u0443\u0436\u0435?","from":{"username":"ufa_art","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xtp1\/t51.2885-19\/s150x150\/12547167_1960203847538633_495474726_a.jpg","id":"1572561697","full_name":"Victory"},"id":"1180144845311455877"},{"created_time":"1454904316","text":"@ufa_art \u043c\u044b \u0434\u043e\u043c\u043e\u0439 \u0443\u0436\u0435 \u0445\u043e\u0442\u0438\u043c \ud83d\ude29\ud83d\ude29\ud83d\ude29","from":{"username":"suhorukova","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/s150x150\/11372058_1495594790752571_1873052032_a.jpg","id":"11414875","full_name":"suhorukova"},"id":"1180145402960949929"},{"created_time":"1454904507","text":"@suhorukova \u0442\u0443\u0442 \u0445\u043e\u043b\u043e\u0434\u043d\u043e \u0438 \u0441\u043a\u043e\u043b\u044c\u043a\u043e!!! \u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0442\u0435\u043f\u043b\u043e\u043c!","from":{"username":"ufa_art","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xtp1\/t51.2885-19\/s150x150\/12547167_1960203847538633_495474726_a.jpg","id":"1572561697","full_name":"Victory"},"id":"1180147002223899427"},{"created_time":"1454904511","text":"\u0421\u043a\u043e\u043b\u044c\u0437\u043a\u043e","from":{"username":"ufa_art","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xtp1\/t51.2885-19\/s150x150\/12547167_1960203847538633_495474726_a.jpg","id":"1572561697","full_name":"Victory"},"id":"1180147039922303784"},{"created_time":"1454905867","text":"@suhorukova \ud83d\ude01 \u0434\u0430\u0432\u0430\u0439 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f: \u0432\u044b \u0432 \u0445\u043e\u043b\u043e\u0434\u043d\u0443\u044e \u0423\u0444\u0443, \u0430 \u043c\u044b \u0432 \u0442\u0435\u043f\u043b\u0443\u044e \u0418\u043d\u0434\u0438\u044e? \ud83d\udc83","from":{"username":"tetya_kosha","profile_picture":"https:\/\/igcdn-photos-f-a.akamaihd.net\/hphotos-ak-xta1\/t51.2885-19\/s150x150\/12142076_525474314294525_564767449_a.jpg","id":"29070023","full_name":"\u0420\u0435\u0433\u0438\u043d\u0430 \u041a\u0430\u0434\u044b\u0440\u043e\u0432\u0430 \ud83c\uddf7\ud83c\uddfa"},"id":"1180158410923717164"}]},"filter":"Normal","created_time":"1454903664","link":"https:\/\/www.instagram.com\/p\/BBgswMVzDL3\/","likes":{"count":148,"data":[{"username":"home_lady_ufa","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/s150x150\/12519326_1559649441020439_1728107361_a.jpg","id":"1614013161","full_name":""},{"username":"faziilova2016","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/s150x150\/11850275_1637465446531195_31168630_a.jpg","id":"1694137308","full_name":"\u041b\u0438\u043b\u0438\u0447\u043a\u0430"},{"username":"energydiet_katya","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/10985973_1540488332870140_86408096_a.jpg","id":"1707618701","full_name":"NL INTERNATIONAL \u0412 \u0428\u042b\u041c\u041a\u0415\u041d\u0422\u0415"},{"username":"so_simple_ufa","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xap1\/t51.2885-19\/s150x150\/12301241_1643515959256345_1412800327_a.jpg","id":"1700298725","full_name":"\ud83d\udccd\u0448\u043e\u0443-\u0440\u0443\u043c (\u043f\u043e \u0437\u0432\u043e\u043d\u043a\u0443)"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12558642_192515537774915_1688916293_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/c0.135.1080.1080\/12568100_1062647987090868_951046345_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12558642_192515537774915_1688916293_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454903664","text":"\u0425\u043e\u0440\u043e\u0448\u043e, \u043a\u043e\u0433\u0434\u0430 \u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0436\u0430\u0435\u0448\u044c \u0431\u043e\u043b\u044c\u0448\u0435 100 \u043a\u043c \u043d\u0430 \u0431\u0430\u0439\u043a\u0435, \u0441 \u0442\u0440\u0443\u0434\u043e\u043c \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0448\u044c \u0441\u0435\u0431\u0435 \u043d\u043e\u0447\u043b\u0435\u0433, \u0430 \u0431\u043e\u043d\u0443\u0441\u043e\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0448\u044c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u0444\u0435\u0439\u0441\u0442\u0430\u0439\u043c\ud83d\ude0d\ud83d\ude0d #gosuhorukovs","from":{"username":"suhorukova","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/s150x150\/11372058_1495594790752571_1873052032_a.jpg","id":"11414875","full_name":"suhorukova"},"id":"1180139931424272720"},"user_has_liked":false,"id":"1180139928203047671_11414875","user":{"username":"suhorukova","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/s150x150\/11372058_1495594790752571_1873052032_a.jpg","id":"11414875","full_name":"suhorukova"}},{"attribution":null,"tags":[],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Amaro","created_time":"1454902230","link":"https:\/\/www.instagram.com\/p\/BBgqBN-lkg3\/","likes":{"count":0,"data":[]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12558636_1671167383171136_1849458594_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/12558636_1671167383171136_1849458594_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12558636_1671167383171136_1849458594_n.jpg","width":640,"height":640}},"users_in_photo":[{"position":{"y":0.6472222,"x":0.15277778},"user":{"username":"sksanthoshsksanthosh","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xap1\/t51.2885-19\/12145472_1518158061832428_1141745981_a.jpg","id":"1955366425","full_name":"Santhosh San"}}],"caption":null,"user_has_liked":false,"id":"1180127904052693047_1955366425","user":{"username":"sksanthoshsksanthosh","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xap1\/t51.2885-19\/12145472_1518158061832428_1141745981_a.jpg","id":"1955366425","full_name":"Santhosh San"}},{"attribution":null,"tags":["loveindia","travellingtheworld","backtonomadity"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Normal","created_time":"1454902049","link":"https:\/\/www.instagram.com\/p\/BBgprJAkGoP\/","likes":{"count":1,"data":[{"username":"fnb82","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xtp1\/t51.2885-19\/s150x150\/11376097_141947589472991_2117581137_a.jpg","id":"2056698060","full_name":"Francesco Baldi"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12724722_864435933664747_444922298_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/12724722_864435933664747_444922298_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12724722_864435933664747_444922298_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454902049","text":"Sunset captured off beach in Goa #backtonomadity #travellingtheworld #loveindia","from":{"username":"bardialus","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/11906329_960233084022564_1448528159_a.jpg","id":"1552941049","full_name":"Scot Bradbury \/ backtonomadity"},"id":"1180126394639739131"},"user_has_liked":false,"id":"1180126386888665615_1552941049","user":{"username":"bardialus","profile_picture":"https:\/\/igcdn-photos-e-a.akamaihd.net\/hphotos-ak-xft1\/t51.2885-19\/11906329_960233084022564_1448528159_a.jpg","id":"1552941049","full_name":"Scot Bradbury \/ backtonomadity"}},{"attribution":null,"tags":["welivetoexplore","womenwhotravel","seetheworld","liveanadventure","sheisnotlost","beachbabe","goa","travelbreak","india","happyplace","passionpassport","darlingescapes","beachbum","wanderlust","passportready","lifebeforework","lwfridays","goliveexplore","dametraveler","ocean","globelletravels","travellushes","globaldegree","travelindia","sunset","beach"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":1,"data":[{"created_time":"1454900047","text":"#ocean #beach #goa #india #happyplace #beachbabe #beachbum #sunset #travelindia #sheisnotlost #dametraveler #darlingescapes #wanderlust #welivetoexplore #womenwhotravel #travelbreak #globelletravels #globaldegree #lifebeforework #liveanadventure #seetheworld #goliveexplore #passportready #passionpassport #travellushes #LWfridays","from":{"username":"micaelashalane","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/12407693_1662367747366842_2120677849_a.jpg","id":"18487407","full_name":""},"id":"1180109586613772980"}]},"filter":"Normal","created_time":"1454899755","link":"https:\/\/www.instagram.com\/p\/BBglTCzpaHR\/","likes":{"count":43,"data":[{"username":"atulgupta12683","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/s150x150\/12547609_207480826271031_1666958643_a.jpg","id":"1322192004","full_name":"Atul Gupta"},{"username":"vagabandinfo","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/10251460_1649493121966835_377097200_a.jpg","id":"1487339298","full_name":"Vagaband"},{"username":"thinkparallax","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-frc\/t51.2885-19\/10617088_515098368621431_272973898_a.jpg","id":"1458115339","full_name":"thinkPARALLAX"},{"username":"workhardtravelwell","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/s150x150\/12357480_492165414304439_401131338_a.jpg","id":"1443270284","full_name":"Kim|workhardtravelwell.com"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12716905_1059656560723845_1508587978_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/c122.0.716.716\/12558346_1719850888230609_584976565_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12716905_1059656560723845_1508587978_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454899755","text":"Bare feet, salty hair....feeling at home\ud83d\ude4f\ud83c\udffb\u2764\ufe0f Love being by an ocean again at Palolem Beach in Goa, India....\ud83d\udc59\u2600\ufe0f","from":{"username":"micaelashalane","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/12407693_1662367747366842_2120677849_a.jpg","id":"18487407","full_name":""},"id":"1180107140764115422"},"user_has_liked":false,"id":"1180107138776015313_18487407","user":{"username":"micaelashalane","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/12407693_1662367747366842_2120677849_a.jpg","id":"18487407","full_name":""}},{"attribution":null,"tags":["kickassparty","silentnoice","mustgo"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Normal","created_time":"1454894217","link":"https:\/\/www.instagram.com\/p\/BBgavF6rB-N\/","likes":{"count":3,"data":[{"username":"avmuktat","profile_picture":"https:\/\/igcdn-photos-f-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/s150x150\/1169934_1129819343725709_1010425687_a.jpg","id":"1429617213","full_name":"Aveek Mukherjee"},{"username":"animalani4","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/s150x150\/12331347_1300166373342699_422978516_a.jpg","id":"577187734","full_name":"Anirudh Malani"},{"username":"__p_a_r_e_s_h__","profile_picture":"https:\/\/igcdn-photos-g-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/10349822_1497273113914238_1986988892_a.jpg","id":"1470118326","full_name":"PARESH MHATRE"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12545501_1676508445923570_1006936340_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/12545501_1676508445923570_1006936340_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12545501_1676508445923570_1006936340_n.jpg","width":640,"height":640}},"users_in_photo":[{"position":{"y":0.646875,"x":0.525},"user":{"username":"animalani4","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/s150x150\/12331347_1300166373342699_422978516_a.jpg","id":"577187734","full_name":"Anirudh Malani"}},{"position":{"y":0.2421875,"x":0.44375},"user":{"username":"ramthakral","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xta1\/t51.2885-19\/12139629_1143961872299891_1087588004_a.jpg","id":"1375277627","full_name":"R@m Th@kr@l"}}],"caption":{"created_time":"1454894217","text":"#silentnoice #kickassparty #mustgo","from":{"username":"sreyasi6","profile_picture":"https:\/\/igcdn-photos-f-a.akamaihd.net\/hphotos-ak-xta1\/t51.2885-19\/s150x150\/12357853_514139305432757_516357126_a.jpg","id":"1082532822","full_name":"Sreyasi"},"id":"1180060697018244324"},"user_has_liked":false,"id":"1180060687748833165_1082532822","user":{"username":"sreyasi6","profile_picture":"https:\/\/igcdn-photos-f-a.akamaihd.net\/hphotos-ak-xta1\/t51.2885-19\/s150x150\/12357853_514139305432757_516357126_a.jpg","id":"1082532822","full_name":"Sreyasi"}},{"attribution":null,"tags":["nofilterneeded","goa","friends","india","day16","coast","100happydays","boats","sand","fun","walk","beach","stroll","chill"],"type":"image","location":{"latitude":15.01044719,"name":"Palolem Beach, South Goa, India","longitude":74.023235016,"id":213715818},"comments":{"count":0,"data":[]},"filter":"Normal","created_time":"1454886295","link":"https:\/\/www.instagram.com\/p\/BBgLoBfSfpr\/","likes":{"count":16,"data":[{"username":"vi_hov","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/12394014_1258359764181143_255123057_a.jpg","id":"575846189","full_name":""},{"username":"winola_peris","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/927453_1544974745782402_449141070_a.jpg","id":"412751266","full_name":"Winola L. Peris"},{"username":"rachelfranknbeans","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xtp1\/t51.2885-19\/s150x150\/12357534_605663966254299_928806123_a.jpg","id":"420025611","full_name":"Rachel Frank"},{"username":"payaldesai1101","profile_picture":"https:\/\/igcdn-photos-f-a.akamaihd.net\/hphotos-ak-xpa1\/t51.2885-19\/11372557_116399502026461_1296913079_a.jpg","id":"352154790","full_name":"Payal Desai"}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/10299676_1032455110157039_322804101_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/10299676_1032455110157039_322804101_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/10299676_1032455110157039_322804101_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454886295","text":"#nofilterneeded #friends #fun #chill #boats #beach #sand #coast #goa #india #walk #stroll #100happydays #day16","from":{"username":"avnigor","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/11325793_478531828981602_1227420076_a.jpg","id":"306679733","full_name":"Avni Gor"},"id":"1179994842454424278"},"user_has_liked":false,"id":"1179994231260445291_306679733","user":{"username":"avnigor","profile_picture":"https:\/\/igcdn-photos-c-a.akamaihd.net\/hphotos-ak-xaf1\/t51.2885-19\/11325793_478531828981602_1227420076_a.jpg","id":"306679733","full_name":"Avni Gor"}},{"attribution":null,"tags":["ciaransfamily","cassoi","food","vegetarian","goa","healthy","galgibaga","delicious","lifestyle"],"type":"image","location":{"latitude":15.0167,"name":"Cassoi by Ciaran's","longitude":74.0167,"id":1021257318},"comments":{"count":0,"data":[]},"filter":"Hudson","created_time":"1454880375","link":"https:\/\/www.instagram.com\/p\/BBgAVSbhyrO\/","likes":{"count":9,"data":[{"username":"madeinvainilla","profile_picture":"https:\/\/igcdn-photos-d-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/s150x150\/11821075_739134112899651_2000893238_a.jpg","id":"285864434","full_name":"V. Vainilla"},{"username":"fernandamerazzi","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xpf1\/t51.2885-19\/s150x150\/12547751_1691660961082127_230230949_a.jpg","id":"41480003","full_name":"Fernanda Paranhos Merazzi \ud83d\udc31"},{"username":"fareast_girl","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/s150x150\/12543344_1082226211821873_602624362_a.jpg","id":"446754698","full_name":"Alena"},{"username":"vi_hov","profile_picture":"https:\/\/igcdn-photos-h-a.akamaihd.net\/hphotos-ak-xfp1\/t51.2885-19\/s150x150\/12394014_1258359764181143_255123057_a.jpg","id":"575846189","full_name":""}]},"images":{"low_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s320x320\/e35\/12677288_1964647840426137_596285774_n.jpg","width":320,"height":320},"thumbnail":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s150x150\/e35\/12677288_1964647840426137_596285774_n.jpg","width":150,"height":150},"standard_resolution":{"url":"https:\/\/scontent.cdninstagram.com\/t51.2885-15\/s640x640\/sh0.08\/e35\/12677288_1964647840426137_596285774_n.jpg","width":640,"height":640}},"users_in_photo":[],"caption":{"created_time":"1454880375","text":"Our little turtle prepares some awesome vegetarian dishes for you - cheese cauliflower soup and trio pate! \nYummy, if I were you, I would hurry up to the Veggie Turtle!\n\n#cassoi #ciaransfamily #galgibaga #goa #vegetarian #food #delicious #healthy #lifestyle","from":{"username":"ciarans_family","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/11078373_1569232693329697_1841336551_a.jpg","id":"1992815457","full_name":""},"id":"1179944573624330684"},"user_has_liked":false,"id":"1179944565269277390_1992815457","user":{"username":"ciarans_family","profile_picture":"https:\/\/igcdn-photos-b-a.akamaihd.net\/hphotos-ak-xfa1\/t51.2885-19\/11078373_1569232693329697_1841336551_a.jpg","id":"1992815457","full_name":""}}]};
			$scope.images=[{}];
			//gauge
			$scope.demoOptions = {
					lines : 12, // The number of lines to draw
					angle : 0, // The length of each line
					lineWidth : 0.4, // The line thickness
					pointer : {
						length : 0.75, // The radius of the inner circle
						strokeWidth : 0.042, // The rotation offset
						color : '#1D212A' // Fill color
					},
					limitMax : 'false', // If true, the pointer will not go past the end of the gauge
					colorStart : '#1ABC9C', // Colors
					colorStop : '#1ABC9C', // just experiment with them
					strokeColor : '#F0F3F3', // to see which ones work best for you
					generateGradient : true,
					maxValue : 100,
					animationSpeed : 20
			};

			$scope.demoValue = 0;


			//real data
			console.log($rootScope.details);

			var contextpath=window.localStorage.getItem('contextpath'); 
			//var contextpath="http://10.244.8.54:3000"; 
			
		     var request1 = $http({
	                cache: true,
	                method: "GET",
	                url: contextpath+"/getWikiInfo",
	                params: {
	                	 lat:$rootScope.details._source.location.lat,
	                     lon:$rootScope.details._source.location.lon
	            	}
	            });
	            request1.then(function(response) {
	            	console.log("success");
	            	$scope.errWiki=response.data.err
	            	console.log(response.data.query.pages);
	            	//if(response.data.err){
	            		$scope.errWiki=response.data.err
	            	//}
	            	for(keys in response.data.query.pages){
	            		var key=keys;
	            		
	            	}
	            	$scope.wiki=response.data.query.pages[key].extract;
	                //$scope.travelList=response.data.hits.hits;
	            }, function(response) {
            	 console.log(response);
            });
	            
	            


		   var request2 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/getWeatherForecast",
		                params: {
		                	 lat:$rootScope.details._source.location.lat,
		                     lon:$rootScope.details._source.location.lon,
		                     days:7

		            	}
		            });
		            request2.then(function(response) {
		            	console.log("success");
		            	console.log(response.data.list);
		                $scope.temps=response.data.list;
		                var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
		                for(tempvalue in $scope.temps){
		                	$scope.temps[tempvalue].dayvalue=days[new Date($scope.temps[tempvalue].dt*1000).getDay()];
		                	$scope.temps[tempvalue].iconvalue=$scope.CurrentWeather[$scope.temps[tempvalue].weather[0].main];
		                }
		                console.log($scope.temps);
		            }, function(response) {
	            	 console.log(response);
	            });  
		            
		            
		       var request3 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/getTweets",
		                params: {
		                	place:$rootScope.details._source.name.split(' ')[0].split(',')[0]

		            	}
		            });
		            request3.then(function(response) {
		            	console.log("success");
		            	console.log(response.data.tweets);
		                $scope.tweets=response.data.tweets;
		            }, function(response) {
	            	 console.log(response);
	            });      
		            
		        
		         var request4 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/getNews",
		                params: {
		                	  tags : $rootScope.details._source.tags.join(","),   
		                      place : $rootScope.details._source.name.split(' ')[0].split(',')[0],
		                      days : 300
		            	}
		            });
		            request4.then(function(response) {
		            	console.log("success");
		            	console.log(response.data);
		            	if(response.data.news_results){
		            		$scope.news=response.data.news_results;
		            	}
		            }, function(response) {
	            	 console.log(response);
	            });   
		            
		            
		          var request5 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/getImageGallery",
		                params: {
		                	  count : 10,   
		                	  lat:$rootScope.details._source.location.lat,
			                   lon:$rootScope.details._source.location.lon,
			                    
		            	}
		            });
		            request5.then(function(response) {
		            	console.log("success");
		            	console.log(response.data);
		            	$scope.images=[];
		            	if(response.data.data){
		            		$scope.imagedata=response.data.data;
		            	}
		                for(var i=0;i<$scope.imagedata.length;i++){
		                	var obj={};
		                	obj.thumb=$scope.imagedata[i].images.thumbnail.url;
		                	obj.img=$scope.imagedata[i].images.standard_resolution.url;
		                	$scope.images.push(obj);
		                }
		                console.log($scope.images);
		            }, function(response) {
	            	 console.log(response);
	            });   
		            
		            
		            var request6 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/getRekkieScore",
		                params: {
		                	lat:$rootScope.details._source.location.lat,
			                lon:$rootScope.details._source.location.lon
		            	}
		            });
		            request6.then(function(response) {
		            	console.log("success");
		            	console.log(response.data);
		            	if(response.data.score!=null)
		            	$scope.demoValue = response.data.score;	
		            	else
		            		$scope.demoValue=40
		            	
		            }, function(response) {
	            	 console.log(response);
	            });  
		            
		            
		            
		            var request7 = $http({
		                cache: true,
		                method: "GET",
		                url: contextpath+"/expandConcepts",
		                params: {
		                	lat:$rootScope.details._source.location.lat,
			                lon:$rootScope.details._source.location.lon,
			                radius :window.localStorage.getItem('radius'),
			                tags : $rootScope.details._source.tags.join(",")+",place"//+","+$rootScope.details._source.name.split(' ')[0].split(',')[0]+",places"
		            	}
		            });
		            request7.then(function(response) {
		            	console.log("success");
		            	console.log(response.data);
		            	//$scope.demoValue = response.data.score;
		            	if(response.data.hits.hits){
		            		//for(var j=0;j<response.data.hits.hits.length;j++){
		            		//	$scope.slides.push(response.data.hits.hits[j]);
		            		$scope.slides=response.data.hits.hits;
		            		//}
		            	}
		            }, function(response) {
	            	 console.log(response);
	            });   

			

		} ]);
