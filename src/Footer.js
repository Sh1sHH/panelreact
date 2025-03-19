import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="page-footer">
      <div className="container">
        {currentYear} &copy; Metronic by keenthemes. <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank" rel="noreferrer">Purchase Metronic!</a>
      </div>
      <div className="scroll-to-top">
        <i className="icon-arrow-up"></i>
      </div>
    </div>
    
  );
}

export default Footer;
