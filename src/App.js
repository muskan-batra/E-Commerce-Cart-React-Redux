import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import  Cards  from './components/cards/card';




function App() {
  return (
    <>
   <Header/>
   <Routes>
     <Route path='/' element={<Cards />} />
   
   </Routes>
  
    </>
  );
}

export default App;
