import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import Layout from './layout'
import PostList from './index'
import Update from './update'
import Create from './create'

// FlowRouter documentation: https://github.com/kadirahq/flow-router
FlowRouter.route('/posts', {
  name: 'list',
  action () {
    mount(Layout, {  // Mount a component and pass it an object with its props
      content () {  // Define the 'content' function as a prop for the Layout component
        return <PostList />  // We return a component that will be mounted within the Layout component
      }
    })
  }
})

FlowRouter.route('/posts/create', {
  name: 'create',
  action () {
    mount(Layout, {
      content () {
        return <Create />
      }
    })
  }
})

FlowRouter.route('/posts/:postId', {  // postId is a route parameter.
  name: 'update',                         // We can make this params optional: ':postId?'
  action ({postId}) {
    mount(Layout, {
      content () {
        return <Update postId={postId} />
      }
    })
  }
})

