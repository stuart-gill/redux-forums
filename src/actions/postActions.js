import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json()) //this is  a promise
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts //in this case 'posts' is the name of the post reducer (I think!)
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  console.log("create post action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData) //this is the actual data we're sending, parse into a string
  })
    .then((res) => res.json()) //tell api that we want json data back
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    ); //then get data back
};
