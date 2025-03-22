import React, { useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormOrder() {
  const [formData, setFormData] = useState({
    customerName: "",
    productID: "",
    quantity: "",
    unitPrice: "",
    totalPrice: "",
    currency: "TL",
  });

  const [submittedData, setSubmittedData] = useState(null); // Kaydedilen veriyi göstermek için state
  const [responseMessage, setResponseMessage] = useState(""); // Kullanıcıya gösterilecek mesaj

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      totalPrice:
        name === "quantity" || name === "unitPrice"
          ? prev.quantity * prev.unitPrice || ""
          : prev.totalPrice,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://private-da348-yusuf7.apiary-mock.com/OrdersP",
        formData
      );
      console.log("Başarıyla Gönderildi:", response.data);
      setSubmittedData(formData);
      setResponseMessage("Sipariş başarıyla kaydedildi! ✅");
    } catch (error) {
      console.error(
        "POST Hatası:",
        error.response ? error.response.data : error
      );
      setResponseMessage("Bir hata oluştu! ❌");
    }
  };

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
              <li className="active">Yeni Sipariş</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Sipariş Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        {/* Siparişi Veren */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Siparişi Veren
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="customerName"
                              className="form-control"
                              placeholder="Müşteri Adı"
                              value={formData.customerName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Ürün */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürün ID
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="productID"
                              className="form-control"
                              placeholder="Ürün ID"
                              value={formData.productID}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Adet */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">Adet</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="quantity"
                              className="form-control"
                              placeholder="Adet"
                              value={formData.quantity}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Birim Fiyat */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Birim Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="unitPrice"
                              className="form-control"
                              placeholder="Birim Fiyat"
                              value={formData.unitPrice}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Toplam Fiyat */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Toplam Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="totalPrice"
                              className="form-control"
                              placeholder="Toplam Fiyat"
                              value={formData.totalPrice}
                              readOnly
                            />
                          </div>
                        </div>

                        {/* Para Birimi */}
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Para Birimi
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="currency"
                              value={formData.currency}
                              onChange={handleChange}
                            >
                              <option value="TL">Türk Lirası (TL)</option>
                              <option value="EUR">Euro (EUR)</option>
                              <option value="USD">Amerikan Doları (USD)</option>
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

                    {/* Kullanıcı girdilerini ekrana yazdırma */}
                    {submittedData && (
                      <div className="alert alert-success mt-3">
                        <h4>Kaydedilen Sipariş:</h4>
                        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                      </div>
                    )}

                    {responseMessage && (
                      <div className="alert alert-info mt-3">
                        {responseMessage}
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

export default FormOrder;
