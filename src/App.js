import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from "react"
import Navigation from './components/Navigation';


function App() {
  const navigationRef = useRef(null)

  useEffect(() => {
    if (navigationRef.current) {
      navigationRef.current.style.pointerEvents = "none";
    }

    return () => {
      if (navigationRef.current) {
        navigationRef.current.style.pointerEvents = "all";
      }
    };
  }, [navigationRef]);

  return (
    <div style={{ pointerEvents: "none" }} className="App">
      
      <Navigation ref={navigationRef} style={{ zIndex:1 }} />
    
      
      </div>
  );
}

export default App;
