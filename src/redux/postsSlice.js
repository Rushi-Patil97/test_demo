import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  selectedPosts: [],
  statusFilter: 'pending',
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    updatePostStatus(state, action) {
      const { id, status } = action.payload;
      const post = state.posts.find(p => p.id === id);
      if (post) post.status = status;
    },
    toggleSelectPost(state, action) {
      const id = action.payload;
      if (state.selectedPosts.includes(id)) {
        state.selectedPosts = state.selectedPosts.filter(pid => pid !== id);
      } else {
        state.selectedPosts.push(id);
      }
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload;
    },
    clearSelected(state) {
      state.selectedPosts = [];
    },
  },
});

export const {
  setPosts, updatePostStatus, toggleSelectPost, setStatusFilter, clearSelected,
} = postsSlice.actions;

export default postsSlice.reducer;
