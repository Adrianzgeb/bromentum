var nano = require('nano')('https://admin:bravoechoechoromeo@bromentum.couchappy.com')
, adrian = nano.use('adrian')

adrian.get( '', {revs_info: true}, function(err, body) {
    if (!err){
        console.log(body);
    }
});