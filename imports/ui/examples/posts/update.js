import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

import Posts from '../../../api/collections/posts'
import References from '../../../api/collections/references'

// Define the props (propeties/params) that this component will need/use
const propTypes = {
  post: React.PropTypes.object,
  isLoading: React.PropTypes.bool
}

const defaultProps = {

}

// Define the component as a Class, extending React.Component
class Update extends React.Component {

  // Class constructor
  constructor (props) {
    super(props)
    // Set the components initial state
    this.state = {
      saveMessage: false
    }
    // Bind "this" object (reference to the component itself) to the components methods
    this.submitForm = this.submitForm.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  // Define methods for this class
  submitForm () {
    // Here we do a "direct update" from the client instead of using a method
    const inputValues = {
      post: this.refs.post.value
    }
    Posts.update({_id: this.props.post._id}, {$set: inputValues}, (error, response) => {
      if (error) {
        console.log(error)
      }
      this.setState({saveMessage: true})
      FlowRouter.go('list')
    })
  }

  deletePost () {
    Posts.remove({_id: this.props.post._id}, (error, response) => {
      if (error) {
        console.log(error)
      }
      FlowRouter.go('list')
    })
  }


  // The render method is the only required one. It must return classic DOM hierachy
  render () {
    // If the prop "post" is not loaded yet, we can show a Loading component for example
    if (this.props.isLoading) return (<div>Loading...</div>)
    return (
      // We are using Material-ui components: http://www.material-ui.com/
      <Paper style={{padding: 20, marginBottom: 10}}>
        <h1>Update Post</h1>
        <form>
          <p><b>Post:</b></p>
          <p>
              <textarea label='post' ref='post' rows='5' cols='50' defaultValue={this.props.post.post}></textarea>
          </p>
        </form>
        <RaisedButton
          primary
          label='submit'
          onTouchTap={this.submitForm} />
        <RaisedButton
          style={{marginLeft: 20}}
          secondary
          label='delete'
          onTouchTap={this.deletePost} />
        <RaisedButton
          style={{marginLeft: 20}}
          label='cancle'
          onTouchTap={() => FlowRouter.go('list')} />

        <Snackbar
          message='Post updated successfully!'
          open={this.state.saveMessage}
          autoHideDuration={3000} />
      </Paper>
    )
  }
}

Update.propTypes = propTypes
Update.defaultProps = defaultProps

export default createContainer(({postId}) => {
  const handler = Meteor.subscribe('updatePosts', postId)
  const isLoading = !handler.ready() // Returns a boolean
  const post = Posts.findOne(postId)
  return { post, isLoading }
}, Update)
