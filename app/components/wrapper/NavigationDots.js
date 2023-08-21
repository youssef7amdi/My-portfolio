import React from "react";
import Link from "next/link";

const NavigationDots = ({ active }) => {
  return (
    <div className="navigation">
      {["home", "about", "work", "skills", "contact"].map(
        (item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
