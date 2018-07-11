import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import { Object } from 'core-js';

export class Posts extends Component {
  static propTypes = {
    getPosts: func.isRequired,
    posts: object.isRequired
  };

  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.posts !== prevState.posts) {
      return {
        prevPosts: nextProps.props,
        posts: null
      };
    }

    return null;
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const Posts = () => {
      return (
        this.props.posts &&
        Object.values(this.props.posts).map(post => {
          return (
            <Link to={`posts/${post.id}`} key={post.id}>
              <li className="list-group-item">{post.title}</li>
            </Link>
          );
        })
      );
    };

    return (
      <div className="posts-index">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Posts</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
