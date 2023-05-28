import { useState } from "preact/hooks";
import Styles from "./hamburger-menu.module.css";

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        style={Styles.button}
        type="button"
        onClick={() => setIsOpen((bool) => !bool)}
      >
        <span style={Styles.border}></span>
        <span style={Styles.border}></span>
        <span style={Styles.border}></span>
      </button>
      {isOpen && (
        <ul style={Styles.menu}>
          {links.map((link) => (
            <li>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
