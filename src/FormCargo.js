import PreFooter from "./PreFooter";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function FormCargo() {
  return (
    <div className="page-md">
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
              <li className="active">Yeni Kargo</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
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
                    <form
                      className="form-horizontal"
                      role="form"
                      method="post"
                      name="form1"
                      id="form1"
                    >
                      <div className="form-body">
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
                              <option value={1}>....</option>
                              <option value={2}>2024031001</option>
                              <option value={3}>2024031002</option>
                              <option value={4}>2024031003</option>
                              <option value={5}>2024031004</option>
                              <option value={6}>2024031005</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Kargo Tarihi
                        </label>
                        <div className="col-md-9">
                          <input
                            className="form-control input-medium date-picker"
                            size={16}
                            type="text"
                            name="dtBirthDate"
                            id="dtBirthDate"
                            autoComplete="off"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Teslim Tarihi
                        </label>
                        <div className="col-md-9">
                          <input
                            className="form-control input-medium date-picker"
                            size={16}
                            type="text"
                            name="dtBirthDate"
                            id="dtBirthDate"
                            autoComplete="off"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Kargo Durumu
                        </label>
                        <div className="col-md-9">
                          <select
                            className="form-control"
                            id="cmbCurrency"
                            name="cmbCurrency"
                          >
                            <option value={1}>...</option>
                            <option value={2}>Hazırlanıyor</option>
                            <option value={3}>Kargoya Verildi</option>
                            <option value={4}>Teslim Edildi</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Kargo Firması
                        </label>
                        <div className="col-md-9">
                          <select
                            className="form-control"
                            id="cmbCurrency"
                            name="cmbCurrency"
                          >
                            <option value={1}>*Lütfen Seçim Yapınız</option>
                            <option value={2}>Yurtiçi Kargo</option>
                            <option value={3}>Aras Kargo</option>
                            <option value={4}>Mng Kargo</option>
                            <option value={5}>UPS Kargo</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button type="submit" className="btn green">
                          Kaydet
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* END SAMPLE FORM PORTLET*/}
            </div>
          </div>
          {/* END PAGE CONTENT INNER */}
        </div>
      </div>
      {/* END PAGE CONTENT */}
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <PreFooter />
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}
export default FormCargo;
