import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewPostForm(props){
  let _title = null;
  let _content = null;

  function handleNewPostFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: title.value,
      content: content.value,
      karma: 1,
      timeOpen: new Moment()
    };
    dispatch(action);
    _title.value = '';
    _content.value = '';
  }

  return (
    <div>
      <hr/>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <br/>
        <br/>
        <textarea
          id='content'
          placeholder='Post Content'
          ref={(textarea) => {_content = textarea;}}/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewPostForm);
