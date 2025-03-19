import React, { useEffect, useState } from "react";
import axios from "axios";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function List_Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // API'den verileri çekme işlemi
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://private-da348-yusuf7.apiary-mock.com/ProductsG" // API endpoint
        );
        setProducts(response.data.Products); // Gelen veriyi state'e kaydet
        setLoading(false);
      } catch (err) {
        setError("Ürünler yüklenirken hata oluştu!");
        setLoading(false);
      }
    };

    fetchProducts();
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
                <a href="FormProduct.html">Ürün Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Ürün Listesi</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Ürün Listesi
                      </span>
                    </div>
                  </div>

                  <div className="portlet-body flip-scroll">
                    {loading ? (
                      <p>Ürünler yükleniyor...</p>
                    ) : error ? (
                      <p style={{ color: "red" }}>{error}</p>
                    ) : (
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">Ürünün Adı</th>
                            <th>Ürün ID</th>
                            <th>Kategori</th>
                            <th>Stok Durumu</th>
                            <th>Fiyat</th>
                            <th>Para Birimi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr key={product.productID}>
                              <td>{product.productName}</td>
                              <td>{product.productID}</td>
                              <td>{product.category}</td>
                              <td className="numeric">{product.stockStatus}</td>
                              <td className="numeric">{product.price}</td>
                              <td>{product.currency}</td>
                            </tr>
                          ))}
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

export default List_Product;
