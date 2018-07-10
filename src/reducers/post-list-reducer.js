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
    let newKarma = action.karma + 1;

    newState = Object.assign({}, state, {
      [action.postId] : {
        title: action.title,
        content: action.content,
        karma: newKarma,
        id: action.postId,
        timeOpen: action.timeOpen
      }
    });
    return newState;
  }

  case 'DOWNVOTE': {
    let lessKarma = action.karma - 1;
    newState = Object.assign({}, state, {
      [action.postId] : {
        title: action.title,
        content: action.content,
        karma: lessKarma,
        id: action.postId,
        timeOpen: action.timeOpen
      }
    });
    return newState;
  }
  default:
    return state;
  }
};
