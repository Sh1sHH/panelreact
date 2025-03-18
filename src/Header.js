function Header() {
  return (
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Müşteri Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Müşteri{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="FormMusteri.html">Müşteri Yeni Kayıt </a>
                    </li>
                    <li className=" ">
                      <a href="List_Musteri.html">Müşteri Listesi </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Ürün Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Ürün{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="FormProduct.html">Yeni Ürün </a>
                    </li>
                    <li className=" ">
                      <a href="List_Product.html">Ürün Listesi </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Sipariş Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Sipariş{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="FormOrder.html">Yeni Sipariş </a>
                    </li>
                    <li className=" ">
                      <a href="List_Order.html">Sipariş Listesi </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Kargo{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="FormCargo.html">Yeni Kargo </a>
                    </li>
                    <li className=" ">
                      <a href="List_Cargo.html">Kargo Listesi </a>
                    </li>
                  </ul>
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
