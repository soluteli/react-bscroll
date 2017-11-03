var ghpages = require('gh-pages');
// var path = require('path');

ghpages.publish('dist', function(err) {
  if (err) {
    return console.log('gh pages error', err)
  }
  console.log('gh pages success')

});