import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

// We import the Home component exported in index.jsx
import Layout from './layout'
import Members from './index'
import SignUp from './signup'
import Login from './login'


/** Simplest example of a route definition using FlowRouter
 * FlowRouter Docs: https://github.com/kadirahq/flow-router
 */
FlowRouter.route('/', {
  name: 'members', // Optional
  action () {
    mount(Layout, {
      content () {
        return <Members />
      }
    })
  }
})

FlowRouter.route('/members/signup', {
  name: 'createUser',
  action () {
    mount(Layout, {
      content () {
        return <SignUp />
      }
    })
  }
})

FlowRouter.route('/members/login', {
  name: 'loginUser',
  action () {
    mount(Layout, {
      content () {
        return <Login />
      }
    })
  }
})