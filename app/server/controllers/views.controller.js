const winston = require('winston'),
    database = require('../db/database'),
    apiController = require('./api.controller'),
    logger = new(winston.Logger)({
        transports: [
            new(winston.transports.Console)(),
            new(winston.transports.File)({
                filename: 'somefile.log'
            })
        ]
    });

// home route
exports.home = (req, res) => {
    res.render('landing', { title: 'Languini!'});
};

// validation example with the 'express-validator package'
exports.postSurvey = (req, res) => {
    req.body.name = req.body.name.trim();
    req.checkBody('name', `That can't be your name, can it?`).isAlpha();
    req.checkBody('img', 'Please enter a valid URL').isURL();
    req.checkBody('q1', 'Please revisit question 1').isInt();
    req.checkBody('q2', 'Please revisit question 2').isInt();
    req.checkBody('q3', 'Please revisit question 3').isInt();
    req.checkBody('q4', 'Please revisit question 4').isInt();
    req.checkBody('q5', 'Please revisit question 5').isInt();
    req.checkBody('q6', 'Please revisit question 6').isInt();
    req.checkBody('q7', 'Please revisit question 7').isInt();
    req.checkBody('q8', 'Please revisit question 8').isInt();
    req.checkBody('q9', 'Please revisit question 9').isInt();
    req.checkBody('q10', 'Please revisit question 10').isInt();
    if (req.validationErrors()) {
        res.render('finder', {
            auth: true,
            errors: req.validationErrors()
        });
        req.session.errors = null;
    } else {
        database.editUser(req, res);
        database.getScore(req.session.uid,
            score => {
                apiController.match(req.session.uid, score, match => {
                    res.render('finder', {
                        match: true,
                        name: match.name,
                        img: match.img,
                        score: match.score
                    });
                    req.session.matched = true;
                });
            });
    }
};

exports.getCommunity = (req, res) => {
    database.readUsers(usersStore => {
        const usersArr = [];
        for (let prop in usersStore) {
            if (prop === req.session.uid) { continue; }
            usersArr.push(usersStore[prop]);
        }
        res.render('community', { friends: usersArr });
    });
};
