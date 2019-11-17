import React from "react";
import CompoRoute from "./assets/comonents/appRoute";
import NavBar from "./assets/layout/navBar";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <NavBar />
        <CompoRoute />
      </div>
    </div>
  );
};

export default App;
