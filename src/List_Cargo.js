import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "./Footer";
import PreFooter from "./PreFooter";
import Header from "./Header";
import HeaderTop from "./HeaderTop";

const List_Cargo = () => {
  const [cargoData, setCargoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://private-da348-yusuf7.apiary-mock.com/cargo")
      .then((response) => {
        console.log("API Response:", response.data); // API verisini konsolda gör
        const data = response.data.Cargos ? response.data.Cargos : []; // Cargos dizisini al
        setCargoData(data); // State'e kaydet
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  let tableRows = [];

  if (cargoData.length > 0) {
    for (let i = 0; i < cargoData.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>{cargoData[i].CargoNo}</td>
          <td>{cargoData[i].CargoDate}</td>
          <td>{cargoData[i].DeliveryDate}</td>
          <td>{cargoData[i].CargoStatus}</td>
          <td>{cargoData[i].CargoCompany}</td>
        </tr>
      );
    }
  } else {
    tableRows.push(
      <tr key="loading">
        <td colSpan="5" className="text-center">
          Veri yükleniyor...
        </td>
      </tr>
    );
  }

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
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Kargo Listesi</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Kargo Listesi
                      </span>
                    </div>
                    <div className="tools">
                      <a
                        href="#"
                        className="collapse"
                        onClick={(e) => e.preventDefault()}
                      ></a>
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
                      <tbody>{tableRows}</tbody>
                    </table>
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
};

export default List_Cargo;
