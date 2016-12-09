// 'use strict'
// const api = require('express').Router()
// const db = require('APP/db')
// const Star = db.model('stars');
// const User = db.model('users');

// api.get('/hello', (req, res) => res.send({hello: 'world'}))

// api.get('/stars', function(req, res, next){
//   Star.findAll({})
//   .then(function(allStars){
//     res.json(allStars)
//   })
// })

// api.get('/wishes', function(req, res, next){
//   Wish.findAll({})
//   .then(function(allWishes){
//     res.json(allWishes)
//   })
// })

// api.post('/stars', function(req, res, next){
//   console.log("_________________", req.body)
//   Star.create(req.body)
//   .then(function(newStar){
//     res.json(newStar)
//   })
// })

// // api.post('/wish', function(req, res, next){
// //   Wish.create(req.body)
// //   .then(function(newWish){
// //     res.json(newWish)
// //   })
// // })

// api.post('/wish', function(req, res, next) {
//     Star.create(req.body) //doesnt work when use findorcreate?
//     .then(function(foundStar){
//       return Wish.create(req.body)
//         .then(function(newWish){
//             newWish.setHolder(foundStar)

//         })
//     })
//     .then(function(newWish){
//       res.json(newWish)
//     })
//     .catch(next)
// })



// api.get('/stars/:id', function(req, res, next){
//   Star.findById(req.params.id)
//   .then(function(thisStar){
//     res.json(thisStar)
//   })
// })

// api.get('/wishes/:id', function(req, res, next){
//   Wish.findById(req.params.id)
//   .then(function(thisWish){
//     res.json(thisWish)
//   })
// })


// //-------user stuff-------------//


// api.post('/login', function (req, res, next) {
//   User.findOne({
//     where: req.body
//   })
//   .then(function (user) {
//     if (!user) {
//       res.sendStatus(401);
//     } else {
//       req.session.userId = user.id;
//       res.sendStatus(204);
//     }
//   })
//   .catch(next);
// });

// api.param('id', function (req, res, next, id) {
//   User.findById(id)
//   .then(function (user) {
//     if (!user) throw HttpError(404);
//     req.requestedUser = user;
//     next();
//   })
//   .catch(next);
// });

// api.get('/users', function (req, res, next) {
//   User.findAll({})
//   .then(function (users) {
//     res.json(users);
//   })
//   .catch(next);
// });

// api.post('/users', function (req, res, next) {
//   User.create(req.body)
//   .then(function (user) {
//     res.status(201).json(user);
//   })
//   .catch(next);
// });

// api.get('/users/:id', function (req, res, next) {
//   req.requestedUser.reload({include: [Story]})
//   .then(function (requestedUser) {
//     res.json(requestedUser);
//   })
//   .catch(next);
// });

// api.put('/users/:id', function (req, res, next) {
//   req.requestedUser.update(req.body)
//   .then(function (user) {
//     res.json(user);
//   })
//   .catch(next);
// });

// api.delete('/users/:id', function (req, res, next) {
//   req.requestedUser.destroy()
//   .then(function () {
//     res.status(204).end();
//   })
//   .catch(next);
// });


 // module.exports = api
