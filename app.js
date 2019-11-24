var express = require('express');
var formidable = require('formidable');
//for session
var session = require('express-session');
var cookieParser = require('cookie-parser');
//
var bodyParser = require('body-parser')
//
var app = express();

app.use(express.static('/views/'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "concertina",
    resave: true,
    saveUninitialized: true
}));

const port = process.env.PORT || 8000
app.listen(port);

/////routes here

//same as login
app.get('/', function (req, res) {
    res.redirect('/login')
})

//login
app.get('/login', function (req, res) {
    res.render('login.pug')
})

app.post('/login', function (req, res) {
    res.redirect('/:accountid/group')
})

//signup page
app.get('/signup', function (req, res) {
    res.render('signup.pug')
})

//signup using accountid
app.post('/signup', async function (req, res) {
    var accountid = req.params.accountid;
    //redirect
    res.render('signup_verify.pug', { accountid: accountid });
});

//signup using accountid
app.get('/signup/verify', async function (req, res) {
    var accountid = req.params.accountid;
    res.render('signup_verify.pug', { accountid: accountid });
});

//signup using accountid
app.post('/signup/verify', async function (req, res) {
    var accountid = req.params.accountid;
    //redirect chain
    res.redirect(accountid + '/group')
});

//homepage of account
app.get('/:accountid/group', async function (req, res) {
    var accountid = req.params.accountid;
    //maybe get the data of the group
    res.render('group.pug', {
        accountid: accountid
    });
});

//Add a new group
app.get('/:accountid/group/add_group', async function (req, res) {
    res.render('add_group.pug', {
        accountid: accountid
    });
});

//Post a group, get a group id, redirect to group
app.post('/:accountid/group/add_group', async function (req, res) {
    // Retrieve the tag from our URL path
    var accountid = req.params.accountid;
    //signup
    res.redirect(accountid + 'group' + groupid)
});

//Redirect to session
app.get('/:accountid/group/:groupid', async function (req, res) {
    res.redirect(accountid + 'group' + groupid + 'session')
});

app.get('/:accountid/group/:groupid/session', async function (req, res) {
    // redirect to create

    // Retrieve the tag from our URL path
    var accountid = req.params.accountid;
    //signup
    res.render('session.pug', {
        accountid: accountid,
        groupid: groupid
    });
});

app.get('/:accountid/group/:groupid/add_session', async function (req, res) {
    res.render('add_session.pug', {
        accountid: accountid,
        groupid: groupid
    });
});

// /session/account/id = /session
app.post('/:accountid/group/:groupid/add_session', async function (req, res) {
    res.redirect(accountid + 'group' + groupid + 'session' + sessionid + 'receipt', receiptid);
});

//Click on specific receipt
app.get('/:accountid/group/:groupid/session/:sessionid/receipt/:receiptid', async function (req, res) {
    res.render('receipt', {
        //blah
    });
});

//Camera to take picture
app.get('/:accountid/group/:groupid/session/:sessionid/receipt/camera', async function (req, res) {
    res.redirect('receipt')
});

//Camera to take picture
app.post('/:accountid/group/:groupid/session/:sessionid/receipt/camera', async function (req, res) {
    res.redirect('receipt')
});

