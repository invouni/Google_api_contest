

// Middleware to check if the user is logged in
module.exports = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log('User not authenticated, redirecting to login');
    res.redirect('/auth/login');
  }
}