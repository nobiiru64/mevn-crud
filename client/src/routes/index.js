import Posts from '@/components/PostsPage'
import NewPost from '@/components/NewPostPage'
import EditPost from '@/components/EditPostPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    // component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost
  }
]

export default routes
