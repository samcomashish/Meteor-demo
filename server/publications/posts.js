import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Posts from '../../imports/api/collections/posts'
import Users from '../../imports/api/collections/users'

/**
 * Meteor uses a "publication/subscription" system to "publish" data to the
 * clients. On the server, we publish data and on the client we subscribe to
 * this data (check: imports/ui/examples/posts/index.jsx line 81)
 */

// This publication allows clients to access the Posts documents
Meteor.publishComposite('listPosts', function () {
  /**
   * You should check the clients permission and grant access if appropiate
   * Package recomendation for Roles management: https://github.com/nicolaslopezj/roles
   */
  return {
    find: function () {
      return Posts.find()
    }
  }
})

// This publication return a Post document given its id
Meteor.publishComposite('updatePosts', function (postId) {
  check(postId, String)
  /**
   * You should check the clients permission and grant access if appropiate
   * Package recomendation for Roles management: https://github.com/nicolaslopezj/roles
   */
  return {
    find: function () {
      return Posts.find(postId)
    }
  }
})

Meteor.publishComposite('users', function (user) {
  check(user, String)
  /**
   * You should check the clients permission and grant access if appropiate
   * Package recomendation for Roles management: https://github.com/nicolaslopezj/roles
   */
  return {
    find: function () {
      return Users.find(user)
    }
  }
})
