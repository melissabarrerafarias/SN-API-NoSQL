const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true, // must be a unique username 
        required: true, // is required 
        trim: true // removes whitespace
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address!']
    }
    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Thought'
    //     }
    // ],
    // friends: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
); 

const User = model('User', UserSchema); 

module.exports = User; 