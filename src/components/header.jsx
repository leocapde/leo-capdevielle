import "./header.css";

export default function Header() {
  return (
    <header id="Header">
      <a href="#Home">
        <h3 className="header-title">Léo Capdevielle</h3>
      </a>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <a href="#Home">
            <li className="header-nav-item">Home</li>
          </a>
          <a href="#About">
            <li className="header-nav-item">About</li>
          </a>
          <a href="#Projects">
            <li className="header-nav-item">Projects</li>
          </a>
          <a href="#Contact">
            <li className="header-nav-item">Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
