import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { deletePostById, getPostById } from '../actions/postActions';

class Post extends Component {
  static propTypes = {
    post: object
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    if (!this.props.post) {
      this.props.getPostById(id);
    }
  }

  onDeleteClick = () => {
    const id = this.props.match.params.id;

    this.props.deletePostById(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{post.title}</h1>
            <h4>{post.categories}</h4>
            <p>{post.content}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button onClick={this.onDeleteClick} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { deletePostById, getPostById }
)(Post);
