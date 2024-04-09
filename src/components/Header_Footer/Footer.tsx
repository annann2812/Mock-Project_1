import Grid from "@mui/material/Grid";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-light my-5 py-5">
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <div
              className="our-address p-5 bg-white rounded"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-row mb-3">
                <img
                  className="mr-3"
                  style={{ height: "60px", width: "60px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="content ml-2">
                  <p className="m-0 text-muted">Find Us</p>
                  <p>
                    <strong>OUR ADDRESS</strong>
                  </p>
                </div>
              </div>
              <p className="text-muted">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i> 17
                Duy Tan, Cau Giay, Ha Noi
              </p>
              <p className="text-muted">
                <i className="fas fa-mobile-alt text-primary mr-2"></i>
                0123-456-789
              </p>
              <p className="text-muted">
                <i className="fas fa-envelope text-primary mr-2"></i>
                Sales@Company.Com
              </p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              className="our-address p-5 bg-white rounded"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-row mb-3">
                <img
                  style={{ height: "60px", width: "60px" }}
                  className="mr-3"
                  src="https://png.pngtree.com/png-vector/20230102/ourlarge/pngtree-writing-letters-png-image_6548443.png"
                  alt=""
                />
                <div className="content ml-2">
                  <p className="m-0 text-muted">Daily Updates</p>
                  <p>
                    <strong>SUBSCIBE US</strong>
                  </p>
                </div>
              </div>
              <p className="text-muted text-center">
                Sign Up And Get A Voucher Of Worth $250.0
              </p>
              <div className="search-wrapper ">
                <div className="input-group  ">
                  <input
                    type="text"
                    className="form-control  "
                    placeholder="Enter your email here..."
                    aria-label="Enter your email here..."
                    aria-describedby="button-addon"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn-header px-3"
                      type="button"
                      id="button-addon"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              className="our-address p-5 bg-white rounded"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-row mb-3">
                <img
                  className="mr-3"
                  style={{ height: "40px", width: "60px" }}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjquhi3wy18D8p9L3OA8v-y4l7O-jQC2JEjiGzbnhXV8NbI05A"
                  alt=""
                />
                <div className="content ml-2">
                  <p className="m-0"> Find Us</p>
                  <p>
                    <strong>OUR ADDRESS</strong>
                  </p>
                </div>
              </div>
              <p className="d-flex flex-row align-items-center">
                <span className="text-muted text-left">
                  Lorem ipsum Simply Dummy Text from the amet lorem daily
                  voucher...
                </span>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container className="m-auto " style={{ width: "90%" }}>
        <Grid item xs={3}>
          {" "}
          <div
            className="information   border-right ml-5  p-5"
            style={{ height: "300px" }}
          >
            <p>
              <strong>INFORMATION</strong>
            </p>
            <p className="text-muted">Contact US</p>
            <p className="text-muted">Sitemap</p>
            <p className="text-muted">Stores</p>
            <p className="text-muted">Login</p>
            <p className="text-muted">My Account</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="our-company  border-left border-right p-5"
            style={{ height: "300px" }}
          >
            <p>
              <strong>Our Company</strong>
            </p>
            <p className="text-muted">Prices Drop</p>
            <p className="text-muted">New Products</p>
            <p className="text-muted">Best Sales</p>
            <p className="text-muted">Sitemap</p>
            <p className="text-muted">Stores</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="quick-links  border-left border-right p-5"
            style={{ height: "300px" }}
          >
            <p>
              <strong>Quick Links</strong>
            </p>
            <p className="text-muted">About Us</p>
            <p className="text-muted">New Products</p>
            <p className="text-muted">Best Sales</p>
            <p className="text-muted">Contact Us</p>
            <p className="text-muted">Sitemap</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="policy-info   p-5">
            <p>
              <strong>POLICIES & INFO</strong>
            </p>
            <p className="text-muted">Delivery</p>
            <p className="text-muted">Legal Notice</p>
            <p className="text-muted">Terms And Conditions Of Use</p>
            <p className="text-muted">About Us</p>
            <p className="text-muted">Secure Payment</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className="our-company text-center border-left  p-5 pb-0"
            style={{ height: "300px" }}
          >
            <p>
              <strong>Dowload App</strong>
            </p>
            <img
              className="my-4"
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/appstore.jpg"
              alt="dowload with app store"
            />
            <img
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/google.jpg"
              alt="dowload with Google Play"
            />
          </div>
        </Grid>
      </Grid>

      <div className=" border">
        <div className="footer">
          <div
            className="nav-bar  m-auto d-flex flex-row justify-content-between align-items-center p-2 py-5"
            style={{ width: "90%" }}
          >
            <div className="icon-wrapper d-flex flex-row justify-content-between border p-1 rounded bg-light">
              <div className="item mx-1">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="item mx-1">
                <i className="fas fa-wifi"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-youtube"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-google-plus-g"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-pinterest-p"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-vimeo-v"></i>
              </div>
              <div className="item mx-1">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="img-logo mr-5">
              <img
                style={{ height: "35px" }}
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/demo-store-logo-1526022580.jpg"
                alt=""
              />
            </div>
            <div className="img-pay">
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/American.png"
                alt=""
              />
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/discover.png"
                alt=""
              />
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/maestro.png"
                alt=""
              />
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/master_card.png"
                alt=""
              />
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/paypal.png"
                alt=""
              />
              <img
                src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/visa.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center border-top">
          <p className="p-3">
            {" "}
            <sup> &copy;</sup>2024-Ecommerce software by PrestaShops{" "}
            <sup>
              <i className="fas fa-trademark"></i>
            </sup>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
