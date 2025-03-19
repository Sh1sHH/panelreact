import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  // Çıkış işlemi
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("rememberMe");
    navigate("/login");
  };

  return (
    <div className="page-header-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="page-logo">
            <a href="/">
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
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-close-others="true"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 0",
                      color: "#5a5c69",
                      textDecoration: "none"
                    }}
                  >
                    <div 
                      style={{ 
                        width: "36px", 
                        height: "36px", 
                        backgroundColor: "#4db393",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px",
                        textTransform: "uppercase"
                      }}
                    >
                      {username ? username.charAt(0) : "U"}
                    </div>
                    <span className="username" style={{ fontWeight: "500" }}>
                      {username}
                    </span>
                    <i className="fa fa-angle-down" style={{ marginLeft: "5px" }}></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-default" style={{
                    borderRadius: "0.35rem",
                    border: "none",
                    boxShadow: "0 .15rem 1.75rem 0 rgba(224, 224, 224, 0.15)",
                    overflow: "hidden"
                  }}>
                    <li>
                      <a href="#" onClick={handleLogout} style={{
                        padding: "10px 20px",
                        color: "#4db393",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center"

                      }}>
                        <i className="fa fa-sign-out" style={{ marginRight: "10px" }}></i> Çıkış Yap
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <a href="/login" style={{ color: "#5a5c69", textDecoration: "none" }}>
                    <i className="fa fa-sign-in" style={{ marginRight: "5px" }}></i> Giriş Yap
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
