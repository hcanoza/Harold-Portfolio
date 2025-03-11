// import { useState } from "react";
import "./Header.css";

interface Props {
  items: string[];
  // onSelectItem: (item: string) => void;
}

function Header({ items }: Props) {
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="container">
      <div className="button-group">
        {items.map((item) => {
          return (
            <button
              className={
                item === "Contact" ? "button-contact-me" : "button-group-item"
              }
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
