import {Switch, Route} from 'react-router-dom'
import Protected from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Protected exact path="/" component={Home} />
    <Protected exact path="/products" component={Products} />
    <Protected exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
