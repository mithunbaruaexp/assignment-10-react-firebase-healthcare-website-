import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopHeader from './pages/TopHeader/TopHeader';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import BookSeat from './pages/BookSeat/BookSeat/BookSeat';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login/Login';
import Team from './pages/Team/Team';
import BoardMember from './pages/BoardMember/BoardMember';
import Booking from './pages/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';



// import Banner from './pages/Banner/Banner';


function App() {
  return (
    <div className="App">
   <AuthProvider>
     <BrowserRouter>
      <TopHeader></TopHeader>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/services'>
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path='/bookseat/:id'>
          <BookSeat></BookSeat>
          
        </PrivateRoute>
        <Route path='/team'>
          <Team></Team>
        </Route>
        <PrivateRoute path='/boardmember'>
          <BoardMember></BoardMember>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/booking'>
          <Booking></Booking>
        </PrivateRoute>
        <Route path='*'>
          <PageNotFound></PageNotFound>
        </Route>

      </Switch>
      
      </BrowserRouter></AuthProvider>   
     
    
      <Footer></Footer>
   
    </div>
  );
}

export default App;
