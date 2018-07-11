import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

export class PostsNew extends Component {
  renderField = field => {
    const { touched, error } = field.meta;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {touched && <span className="text-danger">{error}</span>}
      </div>
    );
  };

  onSubmit = values => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field label="Content" name="content" component={this.renderField} />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  // Title
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (values.title && values.title.length < 3) {
    errors.title = 'Title must be at least three characters';
  }

  // Categories
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  // Content
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
};

const formProps = {
  form: 'PostsNewForm',
  validate
};

export default reduxForm(formProps)(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
