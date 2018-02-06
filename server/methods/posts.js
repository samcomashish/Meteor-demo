import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Posts from '../../imports/api/collections/posts'

/**
 * Methods are used to run code on the server and optionally, send a response
 * to the client (ex: APIs, do computations, work with the DB, etc).
 * In Meteor, methods are functions defined as values of a simple
 * object that is in turn, passed to the Meteor.methods function
 */
Meteor.methods({
  'createPost': function ({post}) {
    check(post, String)

    return Posts.insert({post})
  }
})
