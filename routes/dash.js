let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('dashboard', {
    title: 'Borsa Carichi',
    accountInfo: 'Account Details',
    logoutButton: 'Logout',
    usernameText: 'LoggedUser',
    adminActions: 'Adminstrative Tasks'
  });
});

module.exports = router;
