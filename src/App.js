import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';
import Home from './routes/home/home.component';

const Shop = () => {
  return <h1>Shop Page Holder</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> } />
        <Route path='sign-in' element={ <SignIn /> } />
      </Route> 
      
    </Routes>
  )
};

export default App;
