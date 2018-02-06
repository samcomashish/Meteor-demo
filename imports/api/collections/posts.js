import {Meteor} from 'meteor/meteor'

// Define a colection using Meteor wrapper for Mongo collections
const Posts = new Meteor.Collection('posts')

/** Assign a schema for the model using for validation using SimpleSchema:
 *  https://github.com/aldeed/meteor-simple-schema
 */
Posts.attachSchema({
  post: {
    type: String,
    label: 'Post',
    optional: true
  }
})

export default Posts
