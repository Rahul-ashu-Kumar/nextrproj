import React from 'react';
import Banner from './banner/Banner'
import web from "./images/logoNextra.png";

function Home() {
  return (
    
      
    <Banner 
    bannertitle="Get more sales, traffic with us!"
    subtitle="We offer flexible marketing strategies"
    imgsrc={web}
    btnname={"test"}
  />
  
   
  );
}

export default Home;