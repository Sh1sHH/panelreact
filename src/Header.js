import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // Current path check for active menu item
  const currentPath = window.location.pathname;
  
  // Helper function to check if path is active
  const isActive = (path) => {
    if (path === "/" && currentPath === "/") {
      return true;
    }
    return currentPath.startsWith(path) && path !== "/";
  };

  return (
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu">
          <ul className="nav navbar-nav">
            <li className={isActive("/dashboard") ? "active" : ""}>
              <Link to="/dashboard" style={{
                display: "block",
                padding: "14px 20px",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.25rem",
                transition: "all 0.2s ease-in-out"
              }}>
                <i className="fa fa-home" style={{ marginRight: "8px" }}></i>
                Dashboard
              </Link>
            </li>
            
            <li className={`menu-dropdown classic-menu-dropdown ${isActive("/FormMusteri") || isActive("/ListMusteri") ? "active" : ""}`}>
              <a
                data-toggle="dropdown"
                href="#"
                style={{
                  display: "block",
                  padding: "14px 20px",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  transition: "all 0.2s ease-in-out"
                }}
              >
                <i className="fa fa-users" style={{ marginRight: "8px" }}></i>
                Müşteri Yönetimi <i className="fa fa-angle-down" style={{ marginLeft: "5px" }}></i>
              </a>
              <ul className="dropdown-menu pull-left">
                <li className={isActive("/FormMusteri") ? "active" : ""}>
                  <Link to="/FormMusteri" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-user-plus" style={{ marginRight: "8px" }}></i>
                    Müşteri Yeni Kayıt
                  </Link>
                </li>
                <li className={isActive("/ListMusteri") ? "active" : ""}>
                  <Link to="/ListMusteri" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-list" style={{ marginRight: "8px" }}></i>
                    Müşteri Listesi
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className={`menu-dropdown classic-menu-dropdown ${isActive("/FormProduct") || isActive("/ListProduct") ? "active" : ""}`}>
              <a
                data-toggle="dropdown"
                href="#"
                style={{
                  display: "block",
                  padding: "14px 20px",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  transition: "all 0.2s ease-in-out"
                }}
              >
                <i className="fa fa-cube" style={{ marginRight: "8px" }}></i>
                Ürün Yönetimi <i className="fa fa-angle-down" style={{ marginLeft: "5px" }}></i>
              </a>
              <ul className="dropdown-menu pull-left">
                <li className={isActive("/FormProduct") ? "active" : ""}>
                  <Link to="/FormProduct" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-plus-circle" style={{ marginRight: "8px" }}></i>
                    Yeni Ürün
                  </Link>
                </li>
                <li className={isActive("/ListProduct") ? "active" : ""}>
                  <Link to="/ListProduct" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-list" style={{ marginRight: "8px" }}></i>
                    Ürün Listesi
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className={`menu-dropdown classic-menu-dropdown ${isActive("/formorder") || isActive("/listorder") ? "active" : ""}`}>
              <a
                data-toggle="dropdown"
                href="#"
                style={{
                  display: "block",
                  padding: "14px 20px",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  transition: "all 0.2s ease-in-out"
                }}
              >
                <i className="fa fa-shopping-cart" style={{ marginRight: "8px" }}></i>
                Sipariş Yönetimi <i className="fa fa-angle-down" style={{ marginLeft: "5px" }}></i>
              </a>
              <ul className="dropdown-menu pull-left">
                <li className={isActive("/formorder") ? "active" : ""}>
                  <Link to="/formorder" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-plus-circle" style={{ marginRight: "8px" }}></i>
                    Yeni Sipariş
                  </Link>
                </li>
                <li className={isActive("/listorder") ? "active" : ""}>
                  <Link to="/listorder" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-list" style={{ marginRight: "8px" }}></i>
                    Sipariş Listesi
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className={`menu-dropdown classic-menu-dropdown ${isActive("/formcargo") || isActive("/listcargo") ? "active" : ""}`}>
              <a
                data-toggle="dropdown"
                href="#"
                style={{
                  display: "block",
                  padding: "14px 20px",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  transition: "all 0.2s ease-in-out"
                }}
              >
                <i className="fa fa-truck" style={{ marginRight: "8px" }}></i>
                Kargo Yönetimi <i className="fa fa-angle-down" style={{ marginLeft: "5px" }}></i>
              </a>
              <ul className="dropdown-menu pull-left">
                <li className={isActive("/formcargo") ? "active" : ""}>
                  <Link to="/formcargo" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-plus-circle" style={{ marginRight: "8px" }}></i>
                    Yeni Kargo
                  </Link>
                </li>
                <li className={isActive("/listcargo") ? "active" : ""}>
                  <Link to="/listcargo" style={{ padding: "10px 15px", display: "block" }}>
                    <i className="fa fa-list" style={{ marginRight: "8px" }}></i>
                    Kargo Listesi
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
  );
}

export default Header;
