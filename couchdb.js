var nano = require('nano')('http://bromentum.iriscouch.com')
, adrian = nano.use('adrian')
;

adrian.insert({beep: 'boop'}), 'beep', function(err, body, header) {
    if (err) {
        console.log('[db.insert]', err.message);
        return;
    }
    console.log('beep');
    console.log(body);
};
