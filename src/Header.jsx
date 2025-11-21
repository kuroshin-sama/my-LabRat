import { useState } from "react";
import Sidebar from "./Sidebar";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      {/* <div className="logo">wellcom</div>
      <div className="admin">
        <div className="icon-box">
          <i className="fas fa-user"></i>
        </div>
      </div> */}
      <div class="logo">WELLCOME</div>
      <div class="admin">
        <div class="icon-box">
          <a href="#">
            <i class="fas fa-user"></i>
          </a>
        </div>
      </div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      {/* {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />} */}
      <Sidebar isOpen={isOpen} />
    </header>
  );
}
export default Header;
