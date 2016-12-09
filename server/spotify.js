// 'use strict'

// const express = require('express')
// const bodyParser = require('body-parser')
// const {resolve} = require('path')
// const session = require('express-session');
// const passport = require('passport')
// const cookieParser = require('cookie-parser');
// const methodOverride = require('method-override');
// const consolidate = require('consolidate');
// const request = require('request'); // "Request" library
// const querystring = require('querystring');
// const SpotifyStrategy = require('./strategy.js');
// const swig = require('swig')


// var appKey = '55466afe56fb40179cd48aad37d4b7d9';
// var appSecret = '93d066adcc9049459d1442b774e23348';

// // Passport session setup.
// //   To support persistent login sessions, Passport needs to be able to
// //   serialize users into and deserialize users out of the session. Typically,
// //   this will be as simple as storing the user ID when serializing, and finding
// //   the user by ID when deserializing. However, since this example does not
// //   have a database of user records, the complete spotify profile is serialized
// //   and deserialized.
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });


// // Use the SpotifyStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and spotify
// //   profile), and invoke a callback with a user object.
// passport.use(new SpotifyStrategy({
//   clientID: appKey,
//   clientSecret: appSecret,
//   callbackURL: 'http://localhost:8888/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
//       console.log("AACCESS TOKEN", accessToken)
//       profile.access_token = accessToken

//       // To keep the example simple, the user's spotify profile is returned to
//       // represent the logged-in user. In a typical application, you would want
//       // to associate the spotify account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//     });
//   }));

// // Bones has a symlink from node_modules/APP to the root of the app.
// // That means that we can require paths relative to the app root by
// // saying require('APP/whatever').
// //
// // This next line requires our root index.js:
// const pkg = require('APP')

// const app = express()

// if (process.env.NODE_ENV !== 'production') {
//   // Logging middleware (dev & testing only)
//   app.use(require('volleyball'))
// }


//   app.use(bodyParser.urlencoded({ extended: true }))
//   app.use(bodyParser.json())
//   app.use(cookieParser())
//   app.use(methodOverride())
//   app.use(session({
//   // this mandatory configuration ensures that session IDs are not predictable
//   secret: 'keyboard cat' // or whatever you like
//   }))
//   app.use(function (req, res, next) {
//   console.log('session', req.session);
//   next();
//   })
//   app.use(passport.initialize())
//   app.use(passport.session())

//   // Serve static files from ../public
//   app.use(express.static(resolve(__dirname, '..', 'public')))

//   app.engine('html', consolidate.swig)

//   // Serve our api
//   // .use('/api', require('./api'))


// app.get('/', function(req, res){
//   res.render('../public/index.html', { user: req.user });
// });

// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('../public/account.html', { user: req.user });
// });

// app.get('/login', function(req, res){
//   res.render('../public/login.html', { user: req.user });
// });

// // GET /auth/spotify
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request. The first step in spotify authentication will involve redirecting
// //   the user to spotify.com. After authorization, spotify will redirect the user
// //   back to this aplication at /auth/spotify/callback
// app.get('/auth/spotify',
//   passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
//   function(req, res){
// // The request will be redirected to spotify for authentication, so this
// // function will not be called.
// });

// // GET /auth/spotify/callback
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request. If authentication fails, the user will be redirected back to the
// //   login page. Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.
// app.get('/callback',
//   passport.authenticate('spotify', { failureRedirect: '/login' }),
//   function(req, res) {
//     req.session.access_token = req.session.passport.user.access_token
//     res.redirect('/');
//   });

// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// // Simple route middleware to ensure user is authenticated.
// //   Use this route middleware on any resource that needs to be protected.  If
// //   the request is authenticated (typically via a persistent login session),
// //   the request will proceed. Otherwise, the user will be redirected to the
// //   login page.
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login');
// }

// app.get('/popular', function(req, res, next){
//   console.log("IS THIS THE TOKEN HELLOWOWOOWOOWOW", req.session.access_token)
//   var playlists = {
//           url: 'https://api.spotify.com/v1/browse/featured-playlists',
//           headers: {'Authorization': 'Bearer ' + req.session.access_token },
//           json: true
//         }

//   request.get(playlists, function(error, res, body){
//     res.send(body)
//   })
//   console.log("OKAY ITS HITTING HERE???????")
// });








// // Send index.html for anything else.
// app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

// if (module === require.main) {
//   // Start listening only if we're the main module.
//   //
//   // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
//   const server = app.listen(
//     process.env.PORT || 8888,
//     () => {
//       console.log(`--- Started HTTP Server for ${pkg.name} ---`)
//       console.log(`Listening on ${JSON.stringify(server.address())}`)
//     }
//   )
// }

// module.exports = app
