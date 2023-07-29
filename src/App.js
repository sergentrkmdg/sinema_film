import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from "./components/Footer";

import Home from './components/Home';
import { useSelector } from 'react-redux';
import Card from "./components/Card";


function App() {
  const {drawer} = useSelector(state => state.drawer);
  console.log("drawer", drawer)

  return (
    <div >
   <BrowserRouter>
           {drawer&& <Card/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Footer />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
