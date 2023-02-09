import React from "react";

const bodyParts = [
  { text: "all", icon: "🏋🏾", isToggle: false },
  { text: "back", icon: "🏋🏾", isToggle: false },
  { text: "chest", icon: "🏋🏾", isToggle: false },
  { text: "arms", icon: "🏋🏾", isToggle: false },
  { text: "legs", icon: "🏋🏾", isToggle: false },
];

const Categlory = () => {
  const renderBodyParts = bodyParts.map((bodyPart, idx) => {
    return (
      <div className="Categlory__items">
        <div className="Categlory__items--icon">
          <h4>{bodyPart.icon}</h4>
        </div>
        <h5>{bodyPart.text}</h5>
      </div>
    );
  });
  return <div className="Categlory">{renderBodyParts}</div>;
};

export default Categlory;
