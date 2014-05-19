
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', base: res.base, rates: res.rates });
};