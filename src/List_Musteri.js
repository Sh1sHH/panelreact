import React, { useEffect, useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function List_Musteri() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://private-da348-yusuf7.apiary-mock.com/CustomersG")
      .then((response) => {
        if (response.data.Customers) {
          setCustomers(response.data.Customers);
        } else {
          setError("Müşteri verisi bulunamadı!");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Veri çekme hatası: " + error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
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
                <a href="form_controls.html">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Müşteri Listesi</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Müşteri Listesi
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    {loading ? (
                      <p>Veriler yükleniyor...</p>
                    ) : error ? (
                      <p className="text-danger">{error}</p>
                    ) : (
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">Ad</th>
                            <th>Soyad</th>
                            <th>Mail Adresi</th>
                            <th>GSM</th>
                            <th>Adres</th>
                            <th>Şehir</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.length > 0 ? (
                            customers.map((customer, index) => (
                              <tr key={index}>
                                <td>{customer.txtAd}</td>
                                <td>{customer.txtSoyad}</td>
                                <td className="numeric">{customer.txtMail}</td>
                                <td className="numeric">{customer.txtGSM}</td>
                                <td className="numeric">{customer.txtAdres}</td>
                                <td className="numeric">{customer.txtSehir}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">
                                Müşteri bulunamadı.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>

      <PreFooter />
      <Footer />
    </div>
  );
}

export default List_Musteri;
