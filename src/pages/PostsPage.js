import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postsActions";
import { fetchPosts } from "../actions/postsActions";
import { deletePostSuccess } from "../actions/postsActions";
import { Post } from "../components/Post";
import { ModalPortal } from "../components/modalPortal";
import { EditPostModal } from "../components/editPostModal";

const PostsPage = ({ dispatch, loading, posts, hasErrors, deleted }) => {
  const [visible, setvisible] = useState(false);
  const [visibleEdit, setVisibleEdit ]= useState(false);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setvisible(deleted);
  }, [deleted]);

  const deletePostOne = (id) => {
    dispatch(deletePost(id));
  };
  const closeModal = () => {
    dispatch(deletePostSuccess());
    setvisible(false);
    
  };

  const editPost =(id)=>{
    setVisibleEdit(true)
  }

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;

    if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.map((post) => (
      <Post key={post.id} post={post} deletePost={deletePostOne} editPost={editPost}/>
    ));
  };

  return (
    <section>
   
      <h1>Posts</h1>
      {visible ? <ModalPortal closeModal={closeModal}/> : ""}
      {visibleEdit ? <EditPostModal closeModal={closeModal}/> : ""}

      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
  deleted: state.posts.deleted,
});

export default connect(mapStateToProps)(PostsPage);
