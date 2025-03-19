import React, { useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    productID: "",
    category: "",
    stockStatus: "",
    price: "",
    currency: "TL", // Varsayılan para birimi TL
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://private-da348-yusuf7.apiary-mock.com/ProductsP", // API URL
        { Products: [formData] } // API'ye gönderilecek JSON formatı
      );

      setResponseMessage(response.data.Result || "Ürün başarıyla eklendi!");
    } catch (error) {
      setResponseMessage("Ürün eklenirken hata oluştu!");
      console.error("Ürün ekleme hatası:", error);
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
                <a href="form_controls.html">Ürün Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Ürün Kayıt</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Ürün Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürünün Adı *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="productName"
                              className="form-control input-sm"
                              placeholder="Ürün Adını Giriniz..."
                              value={formData.productName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürün ID *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="productID"
                              className="form-control input-sm"
                              placeholder="Ürün ID'sini Giriniz..."
                              value={formData.productID}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kategori *
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              <option value="Telefon">Telefon</option>
                              <option value="Foto & Kamera">
                                Foto & Kamera
                              </option>
                              <option value="TV & Görüntü & Ses">
                                TV & Görüntü & Ses
                              </option>
                              <option value="Beyaz Eşya">Beyaz Eşya</option>
                              <option value="Bilgisayar & Tablet">
                                Bilgisayar & Tablet
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Stok Durumu *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="stockStatus"
                              className="form-control input-sm"
                              placeholder="Stok Durumunu Giriniz..."
                              value={formData.stockStatus}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="price"
                              className="form-control input-sm"
                              placeholder="Fiyat Bilgisi Giriniz..."
                              value={formData.price}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

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

                    {responseMessage && (
                      <div className="alert alert-info mt-3">
                        {responseMessage}
                      </div>
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

export default FormProduct;
