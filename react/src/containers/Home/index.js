import React from 'react';
import Navbar from '../../components/Navbar';

const divStyle = {
  backgroundImage: 'url(src/assets/images/home/home-background-image.jpg)',
};
const Home = () => (
  <div className="home" style={divStyle}>
    <Navbar />
  </div>
);

export default Home;
