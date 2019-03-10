var mongoose= require('mongoose');

//Creating Todo Model
var Todo= mongoose.model('Todo', {
    text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//Creating User Model
var User= mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports= {Todo, User};