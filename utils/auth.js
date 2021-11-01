const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        next();
    }
  };

// const isLogged = (req, res, next) => {
//     if (req.session.loggedIn) {
//         res.redirect("/");
//     } else {
//         next();
//     }
// };

// module.exports = { withAuth,
    //  isLogged
    //  }