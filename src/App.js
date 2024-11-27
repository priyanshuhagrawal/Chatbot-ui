import React, { useState } from "react";
import CustomizationPanel from "./components/CustomizationPanel";
import ChatbotUI from "./components/ChatbotUI";

function App() {
  // State to hold the customization settings
  const [customizations, setCustomizations] = useState({
    buttonIcon: "",
    borderColor: "#000000",
    borderRadius: 10,
    titleBgColor: "#ffffff",
    botBubbleBgColor: "#e0e0e0",
    botTextColor: "#000000",
    userBubbleBgColor: "#d1ffd1",
    userTextColor: "#000000",
    font: "Arial",
  });

  // Handle updates from the customization panel
  const handleCustomizationChange = (newSettings) => {
    setCustomizations(newSettings);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Customization Panel (Left) */}
      <div
        style={{ width: "30%", padding: "20px", borderRight: "1px solid #ddd" }}
      >
        <CustomizationPanel onCustomize={handleCustomizationChange} />
      </div>

      {/* Chatbot UI (Right) */}
      <div style={{ width: "70%", padding: "20px" }}>
        <ChatbotUI customizations={customizations} />
      </div>
    </div>
  );
}

export default App;
