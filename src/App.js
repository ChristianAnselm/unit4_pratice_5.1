import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import { Navbar } from './components/Navbar'
import { Home } from './components/home'
import Posts  from './components/posts'
import Albums from './components/albums/albums'
import Todos from './components/todos'
import Users from './components/users/users'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/posts' component={Posts} />
        <Route path='/todos' component={Todos}/>
        <Route path='/user' component={Users} />
        <Route path='/albums' component={Albums}/>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
