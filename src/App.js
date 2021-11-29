import React,{ Suspense, lazy } from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// import DashboardPage from './pages/dashboardPage'
const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));
// const DashboardPage = React.lazy(() => import('./pages/dashboardPage'));
// const PostsPage = React.lazy(() => import('./pages/PostsPage'));
// import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <Router>
          <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </Router>
  )
}

export default App