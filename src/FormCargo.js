import React, { useEffect, useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormCargo() {
  const [cargoStatusList, setCargoStatusList] = useState([]);
  const [cargoNamesList, setCargoNamesList] = useState([]);
  const [cargoOrders, setCargoOrders] = useState([]); // Yeni eklenen state (Sipariş numaraları)

  useEffect(() => {
    // Kargo Durumu Verisini Çekme
    axios
      .get("https://private-da348-yusuf7.apiary-mock.com/cargostatus")
      .then((response) => {
        if (response.data.CargoStatusList) {
          setCargoStatusList(response.data.CargoStatusList);
        }
      })
      .catch((error) =>
        console.error("Cargo Status Veri çekme hatası:", error)
      );

    // Kargo Firmaları Verisini Çekme
    axios
      .get("https://private-da348-yusuf7.apiary-mock.com/cargonames")
      .then((response) => {
        if (response.data.CargoNames) {
          setCargoNamesList(response.data.CargoNames);
        }
      })
      .catch((error) => console.error("Cargo Names Veri çekme hatası:", error));

    // Sipariş Numaralarını Çekme
    axios
      .get("https://private-da348-yusuf7.apiary-mock.com/cargo")
      .then((response) => {
        console.log("Cargo Orders API Response:", response.data);
        if (response.data.Cargos) {
          setCargoOrders(response.data.Cargos); // Cargos listesini kaydet
        }
      })
      .catch((error) =>
        console.error("Cargo Orders Veri çekme hatası:", error)
      );
  }, []);

  return (
    <div className="page-md">
      <div className="page-header">
        <HeaderTop />
        <Header />
      </div>
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Kargo</li>
            </ul>

            <div className="row">
              <div className="col-md-12 ">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold ">
                        Kargo Kayıt Formu
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" role="form">
                      <div className="form-body">
                        {/* Sipariş No Dropdown */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Sipariş No
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbCurrency"
                              name="cmbCurrency"
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoOrders.length > 0 ? (
                                cargoOrders.map((order) => (
                                  <option
                                    key={order.CargoNo}
                                    value={order.CargoNo}
                                  >
                                    {order.CargoNo}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  Veri yükleniyor...
                                </option>
                              )}
                            </select>
                          </div>
                        </div>

                        {/* Kargo Tarihi */}
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Kargo Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              type="date"
                              name="dtBirthDate"
                              id="dtBirthDate"
                              autoComplete="off"
                            />
                          </div>
                        </div>

                        {/* Teslim Tarihi */}
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Teslim Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              type="date"
                              name="dtBirthDate"
                              id="dtBirthDate"
                              autoComplete="off"
                            />
                          </div>
                        </div>

                        {/* Kargo Durumu Dropdown */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Durumu
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cargoStatus"
                              name="cargoStatus"
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoStatusList.length > 0 ? (
                                cargoStatusList.map((status) => (
                                  <option
                                    key={status.CargoStatusID}
                                    value={status.CargoStatusID}
                                  >
                                    {status.CargoStatusName}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  Veri yükleniyor...
                                </option>
                              )}
                            </select>
                          </div>
                        </div>

                        {/* Kargo Firması Dropdown */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Firması
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cargoCompany"
                              name="cargoCompany"
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoNamesList.length > 0 ? (
                                cargoNamesList.map((company) => (
                                  <option
                                    key={company.CargoNameID}
                                    value={company.CargoNameID}
                                  >
                                    {company.CargoStatusName}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  Veri yükleniyor...
                                </option>
                              )}
                            </select>
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button type="submit" className="btn green">
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreFooter />
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default FormCargo;
