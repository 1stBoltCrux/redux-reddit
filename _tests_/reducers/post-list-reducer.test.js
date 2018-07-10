import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    title: 'Test Post: Dont Upvote',
    content: 'test',
    karma: 1,
    timeOpen: 1000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { title, content, karma, timeOpen, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      title: title,
      content: content,
      karma: karma,
      timeOpen: timeOpen,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        content: content,
        karma: karma,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

  
});
