import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//Pages 
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Products from './pages/Products'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/products' component={Products}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
