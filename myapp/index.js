const express = require('express');
const app = express();
const port = process.env.port || 8080;
// secure the direct call to the application


const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
const path = require("path");

// XSUAA Middleware
passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));



//app.get('/', getProducts);

// Scope check
function checkReadScope(req, res, next) {
	if (req.authInfo.checkLocalScope('read')) {
		return next();
	} else {
    	console.log('Missing the expected scope');
    	res.status(403).end('Forbidden');
	}
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'webapp', 'index.html'));
});

app.get('/api', (req, res) => {
	res.send({ message: 'Hello, World!' });
});

// Statik dosyaları sunma
app.use(express.static(path.join(__dirname, 'webapp')));

// Serve static files
//app.use('/', express.static('static/'));


app.listen(port, () => {
	console.log('%s listening at %s', app.name, port);
})
