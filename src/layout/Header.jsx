export function Header() {
  return (
    <nav className="blue-grey">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/JeniaGaidukov/react-movies-app"
            >
              My Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
