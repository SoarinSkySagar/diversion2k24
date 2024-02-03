const express = require('express')
const passport = require('passport');
const path = require('path')

const authRouter = express.Router()

authRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'auth.html'))
})

authRouter.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'))
})

authRouter.get('/google',
  passport.authenticate('google', {
    scope: ['email'],
  })
);

authRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failure', successRedirect: '/dashboard' }));

authRouter.post('/email',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/failure',
    failureFlash: true,
    successFlash: 'Welcome!',
  })
);

authRouter.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  });

authRouter.get('/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

module.exports = authRouter