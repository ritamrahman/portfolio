import React from "react";

const Button = () => {
  return (
    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-gs to-ge text-white">
      <a href={require("../assets/Ritam Rahman Resume.pdf")} download="Ritam-Rahman-Resume">
        Download My Resume
      </a>
    </button>
  );
};

export default Button;
