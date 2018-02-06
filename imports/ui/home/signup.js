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

export default class SignUp extends React.Component {

    constructor (props) {
        super(props)
        /**
         * The state object is used to keep track of the component state.
         * On state you can save anything. Use it to register event changes, etc.
         */
        this.state = {
            // saveMessage will be used to display a material-ui Snackbar component
            saveUser: false,
            registerUser: ''
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
            user: this.refs.user.value,
            password: this.refs.password.value,
            confirmPassword: this.refs.confirmPassword.value
        }
        Meteor.call('createUser', inputValues, (error, response) => {
            console.log("--->>>>", response)
            if (error) {
                console.log(error)
            }
            // Update the saveMessage key on the components state object, to show the Snackbar
            this.setState({saveUser: true, registerUser: response})
            FlowRouter.go('/members/login')
        })
    }

    render () {
        return (
            <Paper style={{padding: 20}}>
                <h1>Sign Up</h1>
                <form>
                    <p><b>Email</b></p>
                    <p>
                        <input type='email' label='user' ref='user' placeholder='Email' ></input>
                    </p>
                    <p><b>Password</b></p>
                    <p>
                        <input type='password' label='password' ref='password' placeholder='Password' ></input>
                    </p>
                    <p><b>Confirm Password</b></p>
                    <p>
                        <input type='password' label='confirmPassword' ref='confirmPassword' placeholder='Confirm Password' ></input>
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
                    open={this.state.saveUser}
                    autoHideDuration={3000} />
            </Paper>
        )
    }

}
