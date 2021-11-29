import * as actions from "../actions/postsActions";

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
  deleted: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        hasErrors: false,
        deleted: false,
      };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actions.DELETE_POSTS:
      return { ...state, deleted: false };
    case actions.DELETE_POSTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((r) => r.id != action.payload),
        deleted: true,
        
      };

    case actions.DELETE_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
