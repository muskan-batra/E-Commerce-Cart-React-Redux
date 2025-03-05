import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import  Cards  from './components/cards/card';
import CardsDetails from './components/cards/cardsDetails';




function App() {
  return (
    <>
   <Header/>
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart' element={<CardsDetails />} />
   </Routes>
  
    </>
  );
}

export default App;
