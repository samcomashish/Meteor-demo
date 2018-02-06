/**
 * Created by Samir on 2/5/2018.
 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Users from '../../imports/api/collections/users'

/**
 * Methods are used to run code on the server and optionally, send a response
 * to the client (ex: APIs, do computations, work with the DB, etc).
 * In Meteor, methods are functions defined as values of a simple
 * object that is in turn, passed to the Meteor.methods function
 */
Meteor.methods({
    'createUser': function ({user, password, confirmPassword}) {
        check(user, String)
        check(password, String)
        check(confirmPassword, String)
        return Users.insert({user, password, confirmPassword})
    }
})
