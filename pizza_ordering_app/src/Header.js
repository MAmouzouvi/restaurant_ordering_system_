import React from "react";
import "./App.css";

function Header({ showing }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="container">
        <h1 className="header" style={welcomeTextStyle}>
          WELCOME TO PERFECT PIZZA
        </h1>

        {/* view cart button */}
        <button
          href="/cart"
          className="cart-btn"
          style={cartButtonStyle}
          onClick={() => {
            setShow(!show);
            showing(!show);
          }}
        >
          {show ? "Close Cart" : "View Cart"}
        </button>
      </div>
    </div>
  );
}

const welcomeTextStyle = {
  color: "white", // Set text color to white
  fontWeight: "bold", // Make text bold
  fontFamily: "Thirsty Soft", // Use a nicer font (you can change the font family)
  fontSize: "50px",
};

const cartButtonStyle = {
  backgroundColor: "#FF5733", // Change the background color
  color: "white", // Set text color to white
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold", // Make text bold
  fontFamily: "Helvetica", // Use a nicer font (you can change the font family)
};

export default Header;


