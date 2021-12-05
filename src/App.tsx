import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 3000);
  }, []);

  return loadingPage ? <div style={{width:'100vw', height:'100vh', background:'#222'}}>
  <t-page-loading />
</div> : <h1 style={{width: 'fit-content', margin: '0 auto'}}>Welcome to taichi website</h1>
};

export default App;
