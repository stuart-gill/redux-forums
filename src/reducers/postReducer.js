import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("fetch post reducer");
      return {
        ...state,
        items: action.payload //note: item is plural
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload //note: item is singular. New post functions weird because you aren't actually adding post to API since youre using jsonplaceholder. So you have to manually add your one item (that you receive back from jsonplaceholder) manually
      };

    default:
      return state;
  }
}
