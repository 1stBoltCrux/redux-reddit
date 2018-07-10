import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div className='postListWrapper'>
      {Object.keys(props.postList).map(function(postId) {
        const post = props.postList[postId];
        return <Post
          title={post.title}
          content={post.content}
          karma={post.karma}
          timeOpen={post.timeOpen}
          formattedPostTime={post.formattedPostTime}
          key={postId}
          postId={postId} />;
      })}


    </div>

  );
}
PostList.propTypes = {
  postList: PropTypes.object,

};

export default PostList;
