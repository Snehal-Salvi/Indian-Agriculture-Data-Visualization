import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"; // Import Mantine core styles
import "./App.css"; // Import custom styles
import ProductionData from "./components/ProductionData"; // Import ProductionData component
import YieldAreaData from "./components/YieldAreaData"; // Import YieldAreaData component

function App() {
  return (
    // MantineProvider to apply Mantine styles and theme
    <MantineProvider>
      <div className="container">
        <h1 className="main-heading">Indian Agriculture Data</h1>
        <div>
          {/* ProductionData component */}
          <h1 className="sub-heading">
            Crop with Maximum and Minimum Production Data
          </h1>
          <ProductionData />
        </div>
        <div>
          {/*YieldAreaData component */}
          <h1 className="sub-heading">
            Average Yield and Cultivation Area of the Crop
          </h1>
          <YieldAreaData />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
