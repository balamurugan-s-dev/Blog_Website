import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import HomePage from './routes/HomePage'
import PostListPage from './routes/PostListPage'
import SinglePostPage from './routes/SinglePostPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import Layout from './components/layout/Layout'
import AuthLayout from './components/layout/AuthLayout'
import ForgetPassword from './routes/ForgetPassword'
import TermsAndConditions from './routes/TermsAndConditions'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: "/", element: ( <HomePage /> )},
      { path: "/posts", element: ( <PostListPage /> )},
      { path: "/:slug", element: ( <SinglePostPage /> )},
      { path: "/write", element: ( <Write /> )},
      { path: "/terms-conditions", element: ( <TermsAndConditions />)}
    ]
  },
  {
    element: <AuthLayout/>,
    children:[
      { path: "/login", element: ( <LoginPage /> )},
      { path: "/register", element: ( <RegisterPage /> )},
      { path: "/forgot-password", element: ( <ForgetPassword />)},
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App