import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Products from './pages/Products'

import Navbar from './components/Navbar'
import SideBar from './components/SiderBar'



const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Router>
        <Navbar toggleBar={toggleBar}/>
        <SideBar
          toggleBar={toggleBar}
          isOpen={isOpen}
        />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/products' component={Products}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
