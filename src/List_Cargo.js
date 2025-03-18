import React from "react";
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import Header from "./Header";
import HeaderTop from "./HeaderTop";

function List_Cargo() {
  return (
    <div>
      {/* BEGIN HEADER */}
      <div className="page-header">
        {/* BEGIN HEADER TOP */}
        <HeaderTop />
        {/* END HEADER TOP */}
        {/* BEGIN HEADER MENU */}
        <Header />
        {/* END HEADER MENU */}
      </div>
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="javascript:;"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Kargo Listesi</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Kargo Listesi
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    <table className="table table-bordered table-striped table-condensed flip-content">
                      <thead className="flip-content">
                        <tr>
                          <th width="20%">Sipariş No</th>
                          <th>Kargo Tarihi</th>
                          <th>Teslim Tarihi</th>
                          <th>Kargo Durumu</th>
                          <th>Kargo Firması</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2024031001</td>
                          <td className="numeric">2024-03-01</td>
                          <td className="numeric">2024-03-05</td>
                          <td>Kargoya Verildi</td>
                          <td>Yurtiçi Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031002</td>
                          <td className="numeric">2024-03-02</td>
                          <td className="numeric">2024-03-06</td>
                          <td>Teslim Edildi</td>
                          <td>Aras Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031003</td>
                          <td className="numeric">2024-03-03</td>
                          <td className="numeric">2024-03-07</td>
                          <td>Hazırlanıyor</td>
                          <td>Mng Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031004</td>
                          <td className="numeric">2024-03-04</td>
                          <td className="numeric">2024-03-08</td>
                          <td>Kargoya Verildi</td>
                          <td>UPS Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031005</td>
                          <td className="numeric">2024-03-05</td>
                          <td className="numeric">2024-03-09</td>
                          <td>Teslim Edildi</td>
                          <td>Yurtiçi Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031006</td>
                          <td className="numeric">2024-03-06</td>
                          <td className="numeric">2024-03-10</td>
                          <td>Hazırlanıyor</td>
                          <td>Aras Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031007</td>
                          <td className="numeric">2024-03-07</td>
                          <td className="numeric">2024-03-11</td>
                          <td>Kargoya Verildi</td>
                          <td>Mng Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031008</td>
                          <td className="numeric">2024-03-08</td>
                          <td className="numeric">2024-03-12</td>
                          <td>Teslim Edildi</td>
                          <td>UPS Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031009</td>
                          <td className="numeric">2024-03-09</td>
                          <td className="numeric">2024-03-13</td>
                          <td>Hazırlanıyor</td>
                          <td>Yurtiçi Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031010</td>
                          <td className="numeric">2024-03-10</td>
                          <td className="numeric">2024-03-14</td>
                          <td>Kargoya Verildi</td>
                          <td>Aras Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031011</td>
                          <td className="numeric">2024-03-11</td>
                          <td className="numeric">2024-03-15</td>
                          <td>Teslim Edildi</td>
                          <td>Mng Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031012</td>
                          <td className="numeric">2024-03-12</td>
                          <td className="numeric">2024-03-16</td>
                          <td>Hazırlanıyor</td>
                          <td>UPS Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031013</td>
                          <td className="numeric">2024-03-13</td>
                          <td className="numeric">2024-03-17</td>
                          <td>Kargoya Verildi</td>
                          <td>Yurtiçi Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031014</td>
                          <td className="numeric">2024-03-14</td>
                          <td className="numeric">2024-03-18</td>
                          <td>Teslim Edildi</td>
                          <td>Aras Kargo</td>
                        </tr>
                        <tr>
                          <td>2024031015</td>
                          <td className="numeric">2024-03-15</td>
                          <td className="numeric">2024-03-19</td>
                          <td>Hazırlanıyor</td>
                          <td>Mng Kargo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <PreFooter />
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <Footer />
    </div>
  );
}
export default List_Cargo;
