import React, { useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormMusteri() {
  const [formData, setFormData] = useState({
    txtAd: "",
    txtSoyad: "",
    txtMail: "",
    txtGSM: "",
    txtAdres: "",
    txtSehir: "İstanbul", // Varsayılan değer
  });

  const [submittedData, setSubmittedData] = useState(null); // Kaydedilen veriyi göstermek için state
  const [responseMessage, setResponseMessage] = useState(""); // Kullanıcıya gösterilecek mesaj

  // Kullanıcı girişlerini yakalama
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Formu gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://private-da348-yusuf7.apiary-mock.com/CustomersP",
        formData
      );
      console.log("Başarıyla Gönderildi:", response.data);
      setSubmittedData(formData); // Kaydedilen veriyi ekranda göstermek için state'e yaz
      setResponseMessage("Müşteri başarıyla kaydedildi! ✅");
    } catch (error) {
      console.error("Müşteri ekleme hatası:", error);
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
                <a href="form_controls.html">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Müşteri Kayıt Formu</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Müşteri Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ad *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="txtAd"
                              className="form-control input-sm"
                              placeholder="Adınızı Giriniz..."
                              value={formData.txtAd}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Soyad *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="txtSoyad"
                              className="form-control input-sm"
                              placeholder="Soyadınızı Giriniz..."
                              value={formData.txtSoyad}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Mail Adresi *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="email"
                              name="txtMail"
                              className="form-control input-sm"
                              placeholder="adiniz@ymail.com"
                              value={formData.txtMail}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">GSM</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="txtGSM"
                              className="form-control input-sm"
                              placeholder="5054443322"
                              value={formData.txtGSM}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Adres
                          </label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              name="txtAdres"
                              rows={3}
                              placeholder="Adresinizi giriniz..."
                              value={formData.txtAdres}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Şehir
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="txtSehir"
                              value={formData.txtSehir}
                              onChange={handleChange}
                            >
                              <option value="İstanbul">İstanbul</option>
                              <option value="Ankara">Ankara</option>
                              <option value="İzmir">İzmir</option>
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
                        <h4>Kaydedilen Veri:</h4>
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

export default FormMusteri;
