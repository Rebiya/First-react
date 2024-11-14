import React from "react";
function Header() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    email
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    about us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
