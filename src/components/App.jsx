import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Moment from 'moment';

class App extends React.Component{

  componentDidMount(){
    this.waitTimeUpdateTime = setInterval(() =>
      this.updatePostElapsedTime(),
    6000
  );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTime);
  }

  updatePostElapsedTime(){
    const { dispatch } = this.props;
    Object.keys(this.props.masterPostList).map(postId => {
      const post = this.props.masterPostList[postId];
      const newFormattedPostTime = post.timeOpen.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: postId,
        formattedPostTime: newFormattedPostTime
      };
      dispatch(action);
    });
  }

  render(){
    return(
      <div className='appWrapper'>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.props.masterPostList}/>} />
          <Route path='/newpost' render={()=><NewPostForm/>} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};
export default withRouter(connect(mapStateToProps)(App));
