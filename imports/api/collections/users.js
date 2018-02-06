/**
 * Created by Samir on 2/5/2018.
 */
import {Meteor} from 'meteor/meteor'

// Define a colection using Meteor wrapper for Mongo collections
const Users = new Meteor.Collection('users')

/** Assign a schema for the model using for validation using SimpleSchema:
 *  https://github.com/aldeed/meteor-simple-schema
 */
Users.attachSchema({
    user: {
        type: String,
        label: 'User',
        optional: true
    },
    password: {
        type: String,
        label: 'Password',
        optional: true
    },
    confirmPassword: {
        type: String,
        label: 'Password',
        optional: true
    }
})

export default Users
