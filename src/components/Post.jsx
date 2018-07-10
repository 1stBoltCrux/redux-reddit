import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Post(props){

  function handleUpVote(){
    const {dispatch} = props;
    const action = {
      type: 'UPVOTE',
      title: props.title,
      content: props.content,
      timeOpen: props.timeOpen,
      postId: props.postId,
      karma: props.karma
    };
    dispatch(action);
  }
  function handleDownVote(){
    const {dispatch} = props;
    const action = {
      type: 'DOWNVOTE',
      title: props.title,
      content: props.content,
      timeOpen: props.timeOpen,
      postId: props.postId,
      karma: props.karma
    };
    dispatch(action);

  }
  return(
    <div className='postWrapper'>
      <style jsx>{`
        .postWrapper {
          display: flex;
          justify-content: space-around;
          height: 200px;
          max-height: 10vh;
        }

        .karma {
          width: 10%;
          padding: 20px;
          border: 1px solid gray;
        }

        .titleContent {
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid gray;
        }

      `}</style>
      <div className='karma'>
        <button onClick={handleUpVote}>
          /\
          <br/>
          ||
        </button>
        <br/>
        {props.karma}
        <br/>
        <button onClick={handleDownVote}>
          ||
          <br/>
          \/
        </button>
      </div>
      <div className='titleContent'>
        <h3>{props.title}</h3>
        <br/>
        <p>{props.content}</p>
        <br/>
        <p>{props.timeOpen}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  timeOpen: PropTypes.string,
  karma: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired
};

export default connect()(Post);
