var mongoose = require('mongoose');


var User = mongoose.model('User', {
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});


module.exports = {
    User : User
};