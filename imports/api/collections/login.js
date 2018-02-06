/**
 * Created by Samir on 2/6/2018.
 */
import {Meteor} from 'meteor/meteor'

// Define a colection using Meteor wrapper for Mongo collections
const Login = new Meteor.Collection('loginUser')

/** Assign a schema for the model using for validation using SimpleSchema:
 *  https://github.com/aldeed/meteor-simple-schema
 */
Login.attachSchema({
    user: {
        type: String,
        label: 'User',
        optional: true
    },
    password: {
        type: String,
        label: 'Password',
        optional: true
    }
})

export default Login