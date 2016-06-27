var mongoose = require('mongoose')
var Hymn = mongoose.model('Hymn')

module.exports = function(server, logger) {

  // Sample route
  server.get('/search', function(req, res, next) {
    var keyword = req.query.keyword

    // find junk
    Hymn.find({
      $or: [{
        title: new RegExp(keyword, 'i')
      }, {
        lyrics: new RegExp(keyword, 'i')
      }, {
        author: new RegExp(keyword, 'i')
      }, ]
    }, function(err, data) {
      results = data
      res.send({
        'results': results
      })
      return next();
    })
  });

};