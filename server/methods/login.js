/**
 * Created by Samir on 2/6/2018.
 */
/**
 * Created by Samir on 2/5/2018.
 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Login from '../../imports/api/collections/login'

/**
 * Methods are used to run code on the server and optionally, send a response
 * to the client (ex: APIs, do computations, work with the DB, etc).
 * In Meteor, methods are functions defined as values of a simple
 * object that is in turn, passed to the Meteor.methods function
 */
Meteor.methods({
    'loginUser': function ({user, password}) {
        check(user, String)
        check(password, String)
        return Login.insert({user, password})
    }
})
