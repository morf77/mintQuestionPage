// import { Fragment } from "react"
import Header from "./components/Layout/Header";
import BaclgroundParticle from "./components/UI/Particle";
import Main from "./components/Layout/Main";
// import React, { useContext , useEffect , useState } from 'react';
import { CenteralContextProvider} from "./CentralContext/CentralContext";
import Footer from "./components/Layout/Footer"
// import Cart from "./components/Cart/Cart"
import React from "react";

// I was going to add a medal to the screen to change the stage, but it created a series of problems that I have to solve later
// most of logics is added to context for being more reuseable

function App() {
  return <CenteralContextProvider >
    {/* <Cart /> */}
      <Header />
      <Main />
      <Footer />
      <BaclgroundParticle id="tsparticles"/>
    </CenteralContextProvider>
}

export default App;
