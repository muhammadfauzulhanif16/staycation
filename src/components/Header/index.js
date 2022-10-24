import { IconText } from "../IconText";
import { Button } from "../Button";

export const Header = () => {
  const NavsList = ["Home", "Browse by", "Stories", "Agents"];
 
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <IconText />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {NavsList.map((nav) => (
                <li
                  className={`nav-item ${getNavLinkClass(
                    nav === "Home"
                      ? "/"
                      : `/${nav.split(" ").join("-").toLowerCase()}`
                  )}`}
                >
                  <Button
                    className="nav-link"
                    type="link"
                    href={
                      nav === "Home"
                        ? "/"
                        : `/${nav.split(" ").join("-").toLowerCase()}`
                    }
                  >
                    {nav}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
