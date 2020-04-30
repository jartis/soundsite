// const util = require('../util.js');

module.exports = {
    getHomePage: function (request, response) {
        let egg = request.params.egg;
        response.render('main', { egg: egg });
    }
};