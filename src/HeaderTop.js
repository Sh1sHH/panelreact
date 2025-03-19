import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  // Çıkış işlemi
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    navigate("/login");
    window.location.reload(); // Header güncellenmesi için sayfa yenile
  };

  return (
    <div className="page-header-top">
      <div className="container">
        <div className="page-logo">
          <a href="index.html">
            <img
              src="../../assets/admin/layout3/img/logo-default.png"
              alt="logo"
              className="logo-default"
            />
          </a>
        </div>

        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
            {username ? (
              <li className="dropdown dropdown-user dropdown-dark">
                <a
                  href="javascript:;"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <img
                    alt=""
                    className="img-circle"
                    src="../../assets/admin/layout3/img/avatar9.jpg"
                  />
                  <span className="username username-hide-mobile">
                    {username}
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                  <li>
                    <a href="javascript:;" onClick={handleLogout}>
                      <i className="icon-key" /> Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
