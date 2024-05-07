import React from "react";

interface ConvertButtonProps {
  onConvertClicked: () => void;
}

const ConvertButton: React.FC<ConvertButtonProps> = ({ onConvertClicked }) => {
  return (
    <button
      id="convert_btn"
      className="p-2 rounded bg-blue-500 text-white"
      onClick={onConvertClicked}
    >
      Convert
    </button>
  );
};

export default ConvertButton;
