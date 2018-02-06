/**
 * Created by Samir on 2/6/2018.
 */
/**
 * Created by Samir on 2/5/2018.
 */
/**
 * Compenent for creating a new Resume
 */

import { Meteor } from 'meteor/meteor'
import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

import users from '../../api/collections/users'

// Define the props (propeties/params) that this component will need/use
const propTypes = {
    user: React.PropTypes.object
}

const defaultProps = {

}

export default class Login extends React.Component {

    constructor (props) {
        super(props)
        /**
         * The state object is used to keep track of the component state.
         * On state you can save anything. Use it to register event changes, etc.
         */
        this.state = {
            // saveMessage will be used to display a material-ui Snackbar component
            loginUser: false
        }
        /**
         * We pass this component as "this" to the submitForm method so that the method
         * can access the component properties and other methods
         */
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm () {
        const inputValues = {
            user: this.refs.user.value,
            password: this.refs.password.value
        }
        Meteor.call('loginUser', inputValues, (error, response) => {
            console.log("--->>>>", response)
            if (error) {
                console.log(error)
            }
            // Update the saveMessage key on the components state object, to show the Snackbar
            this.setState({loginUser: true})
            FlowRouter.go('/posts')
        })
    }

    render () {
        return (
            <Paper style={{padding: 20}}>
                <h1>Login</h1>
                <form>
                    <p><b>Email</b></p>
                    <p>
                        <input type='text' label='user' ref='user' placeholder='Email' ></input>
                    </p>
                    <p><b>Password</b></p>
                    <p>
                        <input type='password' label='password' ref='password' placeholder='Password' ></input>
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
                    onTouchTap={() => FlowRouter.go('/')} />

                <Snackbar
                    message='User created successfully!'
                    open={this.state.loginUser}
                    autoHideDuration={3000} />
            </Paper>
        )
    }

}
