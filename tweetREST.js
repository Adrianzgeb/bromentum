var nano = require('nano')('https://admin:bravoechoechoromeo@bromentum.couchappy.com')
, adrian = nano.use('adrian')

var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'ZNrNyuRxBrAERqGkMePiLw',
  consumer_secret: 'NIQQXtg12xHijXebrngIiUhtySzVm0cT4MAt2TeBXY',
  access_token_key: '2379208122-YJuzp16W4RyDFd8IjYdGKPFDJBVacrqGYsgG10o',
  access_token_secret: 'B66IMF6YbuY6LN2HCnTPFzctAEfwOk7Q8WxREmJ2VPJ1V'
});

twit
     .verifyCredentials(function (err, data){
        console.log(data.status);
        adrian.insert(data.status);
    })
    // .updateStatus('Test tweet from ntwitter/' + twitter.VERSION, 
    //function (err, data) {
    //    console.log(data);
    //});
    
