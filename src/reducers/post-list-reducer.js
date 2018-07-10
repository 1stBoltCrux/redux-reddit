export default (state = {}, action) => {
  let newState;
  const { title, content, karma, timeOpen, id, formattedPostTime } = action;

  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        karma: karma,
        timeOpen: timeOpen,
        id: id,
        formattedPostTime: formattedPostTime
      }
    });
    return newState;

  case 'UPVOTE': {
    let newObject= Object.assign({}, state[action.postId]);
    newObject.karma ++;
    let newState = Object.assign({}, state, {
      [action.postId]: newObject
    });
    return newState;
  }

  case 'DOWNVOTE': {
    let newObject= Object.assign({}, state[action.postId]);
    newObject.karma --;
    let newState = Object.assign({}, state, {
      [action.postId]: newObject
    });
    return newState;
  }

  case 'UPDATE_TIME': {
    const newPost = Object.assign({}, state[id], {formattedPostTime});
    newState = Object.assign({}, state, {
      [id]: newPost
    });
    return newState;
  }
  default:
    return state;
  }
};
