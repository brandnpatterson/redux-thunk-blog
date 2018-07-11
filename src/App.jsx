import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Posts from './components/Posts';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
    );
  }
}
