import React from "react";
import IconButton from "./components/ui/buttons/IconButton.test";
import GradientButton from "./components/ui/buttons/GradientButton.test";
import { Bell } from "lucide-react";

import "./App.css";

function App() {
  const handleClick = () => {
    alert("Icon button clicked!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <IconButton
        icon={Bell}
        onClick={handleClick}
        ariaLabel="Notifications"
        badge={true}
      />

      {/* Gradient Button */}
      <GradientButton onClick={() => alert("CTA Clicked")}>
        Get Started
      </GradientButton>
    </div>
  );
}

export default App;
