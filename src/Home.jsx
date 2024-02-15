import React, { useState } from 'react';
import Admin from './Admin';
import Seller from './Seller';
import RegisterOffice from './RegisterOffice';
import BuyerPage from './BuyerPage.jsx';
import './css/Home.css'

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const openComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <h1>Welcome to the Home Screen!</h1>
      <button onClick={() => openComponent(<Admin />)}>Admin</button>
      <button onClick={() => openComponent(<Seller />)}>Seller</button>
      <button onClick={() => openComponent(<BuyerPage />)}>Buyer</button>
      <button onClick={() => openComponent(<RegisterOffice />)}>Register Office</button>

      <div>
        {/* Render the active component */}
        {activeComponent}
      </div>
    </div>
  );
};

export default Home;
