import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {  Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div >
  <AuthProvider>
  <Router>
   <Header></Header>
     <Switch>
       <Route exact path="/">
    <Shop></Shop>
       </Route>
       <Route path="/shop">
    <Shop></Shop>
       </Route>
       <PrivateRoute path="/review">
<OrderReview></OrderReview>
       </PrivateRoute>
       <PrivateRoute path="/shipping">
<Shipping></Shipping>
       </PrivateRoute>
       <Route path="/inventory">
         <Inventory></Inventory>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/register">
         <Register></Register>
       </Route>

       <Route page="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
  </AuthProvider>
   
    </div>
  );
}

export default App;
