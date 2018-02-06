/**
 * List view of the post.
 */

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import _ from 'underscore'
import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import Posts from '../../../api/collections/posts'

/**
 * Definition of the Index component that will use the data "injected" by the
 * createContainer function
 * Define the props (properties/params) that this component will need/use.
 */
const propTypes = {
  /**
   * Prop validation (it's not enforced)
   * Props can be accessed in the component using "this.props.propName".
   * This component uses an array of Post objects
   */
  posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

class PostsList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  renderNoPosts () {
    return (
      <h3>No post yet!</h3>
    )
  }

  renderPosts () {
    /**
     * This section could be in its own component, imported and used here
     * Here's some homework!
     */
    return _.map(this.props.posts, post => {
      return (
        <Paper style={{padding: 20, marginBottom: 10}} key={post._id}>
            <p><b>Post:</b> {post.post}</p>
          <RaisedButton
            label='Edit'
            secondary
            onTouchTap={() => FlowRouter.go('update', {postId: post._id})} />
        </Paper>
      )
    })
  }

  render () {
    return (
      <Paper style={{padding: 20}}>
          <RaisedButton
              label='create Post'
              primary
              onTouchTap={() => FlowRouter.go('create')} />

        <RaisedButton
            style={{marginLeft: 20}}
            label='logout'
            primary
            onTouchTap={() => FlowRouter.go('/')} />
        <h3>List of Post</h3>
        {this.props.posts.length ? this.renderPosts() : this.renderNoPosts()}
      </Paper>
    )
  }
}

// We assign the defined props to this component
PostsList.propTypes = propTypes

/**
 * createContainer function is used to fetch and inject data from the DB.
 * Components should be "dumb" and presentational only.
 * This function subscribes to N publications, queries the DB and returns the
 * data in the form of 'props' (object). It injects this props to the passed in component,
 * in this case: Index
 */
export default createContainer(() => {
  // By subscribing to 'listPosts' we can now access de References collection
  Meteor.subscribe('listPosts')
  const posts = Posts.find().fetch()
  return { posts }
}, PostsList)
