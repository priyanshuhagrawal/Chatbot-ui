import React, { useState } from "react";

const CustomizationPanel = ({ onCustomize }) => {
  const [settings, setSettings] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "buttonIcon") {
      const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i;
      if (value && !urlPattern.test(value)) {
        alert("Please enter a valid image URL for the button icon.");
        return;
      }
    }

    setSettings((prev) => ({ ...prev, [name]: value }));
    onCustomize({ ...settings, [name]: value });
  };

  return (
    <div>
      <h2>Customization Panel</h2>
      <div>
        <label>Button Icon URL:</label>
        <input
          type="text"
          name="buttonIcon"
          value={settings.buttonIcon}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Border Color:</label>
        <input
          type="color"
          name="borderColor"
          value={settings.borderColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Border Radius:</label>
        <input
          type="range"
          name="borderRadius"
          min="0"
          max="50"
          value={settings.borderRadius}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Chat Title Background Color:</label>
        <input
          type="color"
          name="titleBgColor"
          value={settings.titleBgColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bot Bubble Background Color:</label>
        <input
          type="color"
          name="botBubbleBgColor"
          value={settings.botBubbleBgColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bot Text Color:</label>
        <input
          type="color"
          name="botTextColor"
          value={settings.botTextColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>User Bubble Background Color:</label>
        <input
          type="color"
          name="userBubbleBgColor"
          value={settings.userBubbleBgColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>User Text Color:</label>
        <input
          type="color"
          name="userTextColor"
          value={settings.userTextColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Font:</label>
        <select name="font" value={settings.font} onChange={handleChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizationPanel;
