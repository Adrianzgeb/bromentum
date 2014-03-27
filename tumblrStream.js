var nano = require('nano')('https://admin:bravoechoechoromeo@bromentum.couchappy.com')
, adrian = nano.use('adrian')

var tumblr = require('tumblr');

var oauth = {
  consumer_key: 'lTITCSQwA7gDqnbAb79of1TjNI0khEM0zEYcRVOSBcH2PqNWhG',
  consumer_secret: 'qnq3Rg2cepieIG6TtB8fdCwZHwUZsRG7cJda8NqtSJIeJcVV98',
  token: '4e6Z6GmEyMPjzmtG9RoOmsq4cEWVJdo56irVFnwlEUNXL4iIQa',
  token_secret: 'WmruuhX51EzsEnD8Lp965nUPOMzuyQyfmTaAIfafDgddkUdhDB'
};

var blog = new tumblr.Blog('bromentum.tumblr.com', oauth);

blog.text({limit: 2}, function(error, response) {
  if (error) {
    throw new Error(error);
  }
    adrian.insert(posts);
    console.log(response.posts);
});