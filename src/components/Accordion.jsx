import { useState } from "react";
import "../assets/styles/Accordion.scss";

const Accordion = ({ question, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion_container">
      <button
        className={`${!open ? "accordion" : "accordion_triggered"}`}
        onClick={() => setOpen(!open)}
      >
        {question}
        {open ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      <p className={`panel ${open && "panel_triggered"}`}>{children}</p>
    </div>
  );
};

export default Accordion;
