import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NewsFeed from './../NewsFeed'
import MyBlogs from './../MyBlogs'
import Spaces from './../Spaces'
import Groups from './../Groups'
import GroupsDetail from './../Groups/GroupsDetail'
import SpacesDetail from './../Spaces/SpacesDetail'


import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={NewsFeed}/>
          <Route path='/myblogs' component={MyBlogs}/>
          <Route path='/spaces' component={Spaces}/>
          <Route exact path='/groups' component={Groups}/>
          <Route path='/groups/:id' component={GroupsDetail}/>
          <Route path='/spaces/:num' component={SpacesDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
