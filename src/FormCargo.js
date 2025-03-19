import React, { useEffect, useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormCargo() {
  const [cargoStatusList, setCargoStatusList] = useState([]);
  const [cargoNamesList, setCargoNamesList] = useState([]);
  const [cargoOrders, setCargoOrders] = useState([]); // Sipariş numaraları
  const [formData, setFormData] = useState({
    CargoNo: "",
    CargoDate: "",
    DeliveryDate: "",
    CargoStatusID: "",
    CargoNameID: "",
  });

  const [submittedData, setSubmittedData] = useState(null); // Kaydedilen veriyi göstermek için state

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
      .get("https://private-da348-yusuf7.apiary-mock.com/cargoG")
      .then((response) => {
        if (response.data.Cargos) {
          setCargoOrders(response.data.Cargos);
        }
      })
      .catch((error) =>
        console.error("Cargo Orders Veri çekme hatası:", error)
      );
  }, []);

  // Kullanıcı seçimleri için değişiklikleri yakalama
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formu gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://private-da348-yusuf7.apiary-mock.com/cargoP",
        formData
      );
      console.log("Başarıyla Gönderildi:", response.data);
      setSubmittedData(formData);
      alert("Başarıyla kaydedildi! ✅");
    } catch (error) {
      console.error(
        "POST Hatası:",
        error.response ? error.response.data : error
      );
      alert(
        "Bir hata oluştu. ❌\n" +
          (error.response ? JSON.stringify(error.response.data) : error.message)
      );
    }
  };

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
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Kargo Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        {/* Sipariş No */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Sipariş No
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoNo"
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoOrders.map((order) => (
                                <option
                                  key={order.CargoNo}
                                  value={order.CargoNo}
                                >
                                  {order.CargoNo}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Kargo Tarihi */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control"
                              type="date"
                              name="CargoDate"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* Teslim Tarihi */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Teslim Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control"
                              type="date"
                              name="DeliveryDate"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* Kargo Durumu */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Durumu
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoStatusID"
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoStatusList.map((status) => (
                                <option
                                  key={status.CargoStatusID}
                                  value={status.CargoStatusID}
                                >
                                  {status.CargoStatusName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Kargo Firması */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Firması
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoNameID"
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {cargoNamesList.map((company) => (
                                <option
                                  key={company.CargoNameID}
                                  value={company.CargoNameID}
                                >
                                  {company.CargoStatusName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Kaydet Butonu */}
                        <div className="form-actions right">
                          <button type="submit" className="btn green">
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* Kullanıcı girdilerini ekrana yazdırma */}
                    {submittedData && (
                      <div className="alert alert-success">
                        <h4>Kaydedilen Veri:</h4>
                        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreFooter />
      <Footer />
    </div>
  );
}

export default FormCargo;
