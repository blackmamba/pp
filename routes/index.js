
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("index.js called");
  res.render('index.html', { title: 'Express', base: res.base, rates: res.rates });
};