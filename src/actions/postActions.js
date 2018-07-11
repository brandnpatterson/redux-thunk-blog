import axios from 'axios';
import { CREATE_POST, DELETE_POST, GET_POST, GET_POSTS } from './types';

const endpoint = endpoint =>
  `http://reduxblog.herokuapp.com/api/${endpoint}?key=react1`;

// Get Posts
export const getPosts = () => dispatch => {
  //reduxblog.herokuapp.com/api/posts?key=react1
  axios
    .get(endpoint('posts'))
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Get Post By Id
export const getPostById = id => dispatch => {
  //reduxblog.herokuapp.com/api/posts/:id?key=react1
  axios
    .get(endpoint(`posts/${id}`))
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Create Post
export const createPost = (values, callback) => dispatch => {
  //reduxblog.herokuapp.com/api/posts?key=react1
  axios
    .post(endpoint('posts'), values)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      });
      callback();
    })
    .catch(err => console.log(err));
};

// Delete Post By Id
export const deletePostById = (id, callback) => dispatch => {
  //reduxblog.herokuapp.com/api/posts/:id?key=react1
  axios
    .delete(endpoint(`posts/${id}`))
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
      callback();
    })
    .catch(err => console.log(err));
};
