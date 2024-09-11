import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> } />
      </Route> 
      
    </Routes>
  )
};

export default App;
