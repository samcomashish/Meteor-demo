/**
 * Compenent for creating a new Resume
 */

import { Meteor } from 'meteor/meteor'
import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

export default class Create extends React.Component {

  constructor (props) {
    super(props)
    /**
     * The state object is used to keep track of the component state.
     * On state you can save anything. Use it to register event changes, etc.
     */
    this.state = {
      // saveMessage will be used to display a material-ui Snackbar component
      saveMessage: false
    }
    /**
     * We pass this component as "this" to the submitForm method so that the method
    * can access the component properties and other methods
     */
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm () {
    /**
     * We call a method to save the new Resume to de DB. We could also just
     * call the "collection.insert" method directly here.
     */
    const inputValues = {
      post: this.refs.post.value
    }
    Meteor.call('createPost', inputValues, (error, response) => {
      if (error) {
        console.log(error)
      }

      // Update the saveMessage key on the components state object, to show the Snackbar
      this.setState({saveMessage: true})
      FlowRouter.go('list')
    })
  }

  render () {
    return (
      <Paper style={{padding: 20}}>
        <h1>Create Post</h1>
        <form>
          <p><b>Post:</b></p>
          <p>
            <textarea label='post' ref='post' rows='5' cols='50' ></textarea>
          </p>
        </form>
        <RaisedButton
          primary
          label='Submit'
          onTouchTap={this.submitForm} />
        <RaisedButton
          style={{marginLeft: 20}}
          secondary
          label='cancel'
          onTouchTap={() => FlowRouter.go('list')} />

        <Snackbar
          message='Post created successfully!'
          open={this.state.saveMessage}
          autoHideDuration={3000} />
      </Paper>
    )
  }

}
