export default (state = {}, action) => {
  let newState;
  const { title, content, karma, timeOpen, id } = action;

  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        karma: karma,
        timeOpen: timeOpen,
        id: id
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
  default:
    return state;
  }
};
