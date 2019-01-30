import React from 'react'
import { Link } from 'react-router-dom'

export default class AllUsers extends React.Component {
    state = {
        searchInput: '',
        selectedUser: null
    }

    handleInput = event => {
        const { target: { value } } = event
        // SAME AS ABOVE const { value } = event.target
        this.setState({
            searchInput: value
        })
    }

    searchForUser = () => {
        const { searchInput } = this.state

        if(searchInput){
            let search = searchInput.toLowerCase()
            
            let isUser = this.props.users.find(user => {
                let lowerName = user.name.toLowerCase()
                let lowerUsername = user.username.toLowerCase()

                return lowerName.indexOf(search) !== -1 || search === lowerUsername
            })

            if(isUser){
                this.setState({ selectedUser: isUser })
            }
        }
    }

    clearUser = () => {
        if(this.state.selectedUser){
            this.setState({ selectedUser: null, searchInput: '' })
        }
    }

    render(){
        const { selectedUser, searchInput } = this.state
        if(selectedUser){
            let link = `/user/${selectedUser.id}/posts`
            return (<div>
                <input 
                type='text'  
                value={searchInput}
                onChange={this.handleInput}
                placeholder='Search for user'
                />
                <button onClick={this.searchForUser}>Do Search</button>
                <button onClick={this.clearUser}>Clear User</button>
                <Link to={link}><h1>Name: {selectedUser.name}</h1></Link>
                <p>Catfish: {selectedUser.username}</p>
            </div>)
        }
        return(
            <div>
                <h1>All Users</h1>
                <input 
                type='text'  
                value={searchInput}
                onChange={this.handleInput}
                placeholder='Search for user'
                />
                <button onClick={this.searchForUser}>Do Search</button>
                <button onClick={this.clearUser}>Clear User</button>
                {this.props.users.map(user => {
                    let link = `/user/${user.id}/posts`
                    return(
                        <div key={user.id}>
                        <Link to={link}><h1>Name: {user.name}</h1></Link>
                        <p>AIM: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <hr />
                    </div>
                    )
                })}
            </div>
        )
    }
}
 