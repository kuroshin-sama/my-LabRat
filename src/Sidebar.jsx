function Sidebar({ isOpen }) {
return (
    <nav className={`nav-menu ${isOpen ? 'active' : ''}`}
    style={{
      right: isOpen ? 0 : '-100%',

    }}
    >
      <ul>
        <li><a href="#"><i className="fas fa-home"></i> خانه</a></li>
        <li><a href="#"><i className="fas fa-user"></i> درباره ما</a></li>
        <li><a href="#"><i className="fas fa-briefcase"></i> خدمات</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i> تماس</a></li>
      </ul>
    </nav>
  );
}
export default Sidebar;
