import React, { useEffect, useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function List_Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://private-da348-yusuf7.apiary-mock.com/OrdersG"
        );
        setOrders(response.data.Orders);
        setLoading(false);
      } catch (error) {
        setError("Siparişler yüklenirken hata oluştu.");
        setLoading(false);
      }
    };

    fetchOrders();
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
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Sipariş Listesi</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Sipariş Listesi
                      </span>
                    </div>
                  </div>

                  <div className="portlet-body flip-scroll">
                    {loading ? (
                      <p>Yükleniyor...</p>
                    ) : error ? (
                      <p className="text-danger">{error}</p>
                    ) : (
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">Siparişini Veren</th>
                            <th>Ürün ID</th>
                            <th>Adet</th>
                            <th>Birim Fiyat</th>
                            <th>Toplam Fiyat</th>
                            <th>Para Birimi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr key={index}>
                              <td>{order.customerName}</td>
                              <td>{order.productID}</td>
                              <td className="numeric">{order.quantity}</td>
                              <td className="numeric">{order.unitPrice}</td>
                              <td className="numeric">{order.totalPrice}</td>
                              <td>{order.currency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default List_Order;
