import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

class App extends React.Component{

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
