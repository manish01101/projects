import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import CardDetails from './components/CardDetails';
import Appbar from './components/Appbar';
import CreateCard from './components/CreateCard';

function App() {
  
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/carddetails' element={<CardDetails />} />
        <Route path='/createcard' element={<CreateCard/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
