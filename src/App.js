import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/Pages/Home/Home";
import Menu from "../src/Pages/Menu/Menu";
import BulkOrders from "../src/Pages/BulkOrder/BulkOrder";
import Services from "../src/Pages/Services/Services";
import Header from './Component/Common/Header/Header';
import Footer from './Component/Common/Footer/Footer';
import { useState } from 'react';
import OrederHover from './Pages/OrderHover/OrederHover';

function App() {

  const [ order , setOrder] = useState(false)


  return (

<>
      
      {order && <OrederHover setOrder={setOrder} />}

      <div className={`App ${order ? "blurred-background" : ""}`}>

        <Header setOrder={setOrder} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu setOrder={setOrder} />} />
          <Route exact path='/bulkorders' element={<BulkOrders />} />
          <Route exact path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}

export default App;
