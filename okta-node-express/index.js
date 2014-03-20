var express = require('express');
var app = express();

var auth = require('auth');

app.configure(function() {  
  app.use(express.session({ /* empty session*/ }));
  app.use(auth.initialize());
  app.use(auth.session());
});

app.get('/', auth.protected, function(req, res){
	res.end("Hello " + req.session.userId);

});


app.get('/hello', auth.protected, function(req, res){
	res.end("Hello World!");
});


app.post('/auth/:name/callback' function(req, res){
  req.session.userId = auth.session.uid;
  res.redirect(req.params['RelayState'] )
});

app.get('/login',
  auth.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {

    res.redirect('/');
  }
);

app.listen(process.env.PORT || 4567);
console.log("Server started");
