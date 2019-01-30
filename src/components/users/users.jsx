import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

import  AllUsers from './AllUsers'
import { UserPost } from './UserPost'

export default class Users extends React.Component {
    state = {
        allUsers: [],
        allPosts: []
    }

    getAllUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                allUsers: res.data
            })
        })
    }

    getAllPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                allPosts: res.data
            })
        })
    }

    componentDidMount(){
        this.getAllPosts()
        this.getAllUsers()
    }

    renderUserPost = props => {
        const { id } = props.match.params
        const { allUsers, allPosts } = this.state

        const findUser = allUsers.find(user => user.id === Number(id))
        const findUserPosts = allPosts.filter(post => post.userId === Number(id))
        
        return (<UserPost {...props} user={findUser} posts={findUserPosts}/>)
    }

    renderAllUsers = () => {
        const { allUsers } = this.state

        return (<AllUsers users={allUsers}/>)
    }


    render(){
        return(
            <div>
                <Route path='/user/:id/posts' render={this.renderUserPost}/>
                <Route exact path='/user' render={this.renderAllUsers}/>
            </div>
        )
    }
}