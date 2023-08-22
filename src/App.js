import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  //Practice parallax scroll
  return (
    <>
      {/* add parallax for pages */}
      <Parallax pages={4} className="parallax">
        {/* add layers for inside single page even you can add background img by style in parallaxlayer */}
        <ParallaxLayer offset={0} speed={0.6}>
          <h1>Hey</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
        >
          <h1>parallax scroll</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
          <h1>Hehe</h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
