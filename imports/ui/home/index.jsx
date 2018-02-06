import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default class members extends React.Component {

    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <Paper style={{padding: 20}}>
                <p><b> Welecome to Demo App</b></p>
                <RaisedButton
                    label='create User'
                    primary
                    onTouchTap={() => FlowRouter.go('createUser')} />

                <RaisedButton
                    style={{marginLeft: 20}}
                    label='login User'
                    primary
                    onTouchTap={() => FlowRouter.go('loginUser')} />
            </Paper>
        )
    }
}
