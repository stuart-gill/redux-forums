import React, { Component } from "react";
import { connect } from "react-redux";
//connects components to redux store that's provided by provider in app.js
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts(); //lifecycle method initiates action to fetch posts
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      //lifecycle method listens for new props, then runs this code to add the nextProps.newPost to the posts array in state. This is kind of an unusual way to do it because usually you would be able to just re-render the state to get the new list from the api database
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = (state) => ({
  posts: state.posts.items, //here as well posts is the name for the FETCH_POSTS postReducer
  newPost: state.posts.item //newPost is the name for the NEW_POST postreducer
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
