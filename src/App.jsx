import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Cards from './components/Cards';

function App() {

  const [transformStyle, setTransformStyle] = useState("translateX(0px)");
  const handleTransformStyle = () => {
    setTransformStyle((prev) => prev == "translateX(0px)" ? (prev = "translateX(25px)") : "translateX(0px)"
    );
  };

  const [showPrice, setShowPrice] = useState(false);
  const clickShowPrice = () => {
    if (transformStyle == "translateX(0px)") {
      setShowPrice(true)
    }
    if (transformStyle == "translateX(25px)") {
      setShowPrice(false);
    } else {
      setShowPrice(true)
    }
  };

  const switchButton = () => {
    handleTransformStyle();
    clickShowPrice();
  };

  const switchKeyButton = (e) => {
    if (e.key === 'ArrowRight' && transformStyle === "translateX(0px)") {
      handleTransformStyle();
      clickShowPrice();
    } 
    if (e.key === 'ArrowLeft' && transformStyle === "translateX(25px)") {
      handleTransformStyle();
      clickShowPrice();
    }
  }
  
  return (
    <div className="App">
      <Header
        clickTransformStyle={transformStyle}
        clickSwitchButton={switchButton}
        pressKeyButton={switchKeyButton}
      />
      <Cards switchPrice={showPrice} />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/marianaceci" target="_blank">Mariana Schmidt</a>.
      </div>
    </div>
  );
}

export default App;
