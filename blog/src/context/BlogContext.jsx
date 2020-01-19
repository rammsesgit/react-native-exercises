import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { id: `${new Date().getTime()}`, title: `Blog Post #${state.length + 1}` }]
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' })
  }
}
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)
