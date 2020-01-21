import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: `${new Date().getTime()}`,
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } })
    callback()
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
  [
    { id: '1', title: 'Alma Shaffer', content: '551 Orrand Dr Richmond, VA  23232 (804) xxx-xxxx' },
    {
      id: '2',
      title: 'Rory Bates',
      content: '494 West Street Terr Richmond, VA  23232 (804) xxx-xxxx'
    },
    { id: '3', title: 'Ralph Small', content: '699 Lincoln Rd Austin, TX  78710 (512) xxx-xxxx' },
    { id: '4', title: ' Murphy', content: '51 Old Pinbrick Dr Memphis, TN  38101 (901) xxx-xxxx' },
    { id: '5', title: 'Ira Merrill', content: '784 Main St Utica, NY  13504 (315) xxx-xxxx' },
    { id: '6', title: 'Savannah Watson', content: '457 Lake Dr Aurora, IL  60507 (708) xxx-xxxx' },
    { id: '7', title: 'Nola Odonnell', content: '817 Third St Dallas, TX  75260 (214) xxx-xxxx' },
    {
      id: '8',
      title: 'Isiah Simpson',
      content: '569 Bourg St Plainfield, NJ  07061 (908) xxx-xxxx'
    },
    { id: '9', title: 'Frieda Huber', content: '277 Brandy Run Coward, SC  29530 (843) xxx-xxxx' },
    {
      id: '10',
      title: 'Faustino French',
      content: '75 Cedarwood Ln Aurora, IL  60507 (708) xxx-xxxx'
    },
    { id: '11', title: 'Valarie Snow', content: '334 Lake Dr Albany, GA  31706 (912) xxx-xxxx' },
    {
      id: '12',
      title: 'Adrian Sharp',
      content: '405 Bryant Blvd Aurora, IL  60507 (708) xxx-xxxx'
    },
    {
      id: '13',
      title: 'Buddy Arnold',
      content: '662 Lemoyer Blvd Emporia, KS  66801 (316) xxx-xxxx'
    },
    { id: '14', title: 'Ward Walton', content: '645 Third St Denver, CO  80202 (303) xxx-xxxx' },
    { id: '15', title: 'Cory Vinson', content: '650 Tulip St Aurora, IL  60507 (708) xxx-xxxx' },
    {
      id: '16',
      title: 'Marlin Smith',
      content: '663 Buncaneer Dr Athens, GA  30601 (404) xxx-xxxx'
    },
    {
      id: '17',
      title: 'Brad Kinney',
      content: '892 Beley Rd Burlington, NC  27215 (919) xxx-xxxx'
    },
    {
      id: '18',
      title: 'Adriana Patterson',
      content: '506 Bryant Blvd Sunnyvale, CA  94086 (408) xxx-xxxx'
    },
    {
      id: '19',
      title: 'Billie Rodgers',
      content: '585 Brandy Run Biloxi, MS  39530 (228) xxx-xxxx'
    },
    {
      id: '20',
      title: 'Travis Flynn',
      content: '61 Bryant Blvd Appleton, WI  54911 (414) xxx-xxxx'
    }
  ]
)
