import * as React from "react";

import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { Fragment } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/LOOP-logo (2).png";

const Header = () => {
  const [currency, setCurrency] = React.useState("");
  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };
  const [language, setLanguage] = React.useState("");
  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const [account, setAccount] = React.useState("");
  const handleChangeAccount = (event: SelectChangeEvent) => {
    setAccount(event.target.value);
  };

  return (
    <Fragment>
      {/* nav */}
      <div className="bg-light">
        <div
          className="nav-bar  m-auto d-flex flex-row justify-content-between align-items-center"
          style={{ width: "90%" }}
        >
          <p className="mt-4" style={{ fontSize: "12px" }}>
            <LoyaltyIcon sx={{ fontSize: "12px" }} color="primary" /> Biggest
            Indian Sale Flate ( Coupn Code : <strong>FREE 15</strong> )
          </p>
          <div className="right-nav d-flex flex-row justify-content-between">
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                fontSize: "12px",
                fontFamily: "Poppins",
              }}
              size="small"
            >
              <InputLabel id="demo1-select-small-label">Curency</InputLabel>
              <Select
                labelId="demo1-select-small-label"
                id="demo1-select-small"
                value={currency}
                label="currency"
                onChange={handleChangeCurrency}
              >
                <MenuItem value="eur" sx={{ fontSize: "15px" }}>
                  <EuroIcon sx={{ fontSize: "15px" }} className="mr-1" />
                  EUR
                </MenuItem>
                <MenuItem value="usd" sx={{ fontSize: "15px" }}>
                  <AttachMoneyIcon sx={{ fontSize: "15px" }} className="mr-1" />
                  USD
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 120, fontSize: "12px" }}
              size="small"
            >
              <InputLabel id="demo1-select-small-label">Language</InputLabel>
              <Select
                labelId="demo1-select-small-label"
                id="demo1-select-small"
                value={language}
                label="language"
                onChange={handleChangeLanguage}
              >
                <MenuItem value="eur">
                  <img
                    className="d-inline-block mr-1"
                    src="https://prestashop.templatemela.com/PRS08/PRS080183/img/l/1.jpg"
                    alt=""
                  />
                  English
                </MenuItem>
                <MenuItem value="usd" sx={{ fontSize: "15px" }}>
                  <img
                    className="d-inline-block mr-1 "
                    style={{ width: "18px" }}
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  Tiếng việt
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 120, fontSize: "12px" }}
              size="small"
            >
              <InputLabel id="demo1-select-small-label">Account</InputLabel>
              <Select
                labelId="demo1-select-small-label"
                id="demo1-select-small"
                value={account}
                label="account"
                onChange={handleChangeAccount}
              >
                <MenuItem value="signin">
                  <Link to="/login">Log In</Link>
                </MenuItem>
                <MenuItem value="signin">
                  <Link to="/signup">Sign Up</Link>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/*  */}
        <div
          className="nav-bar  m-auto d-flex flex-row justify-content-between align-items-center py-2"
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
          {/*  */}
          <div className="search-wrapper ">
            <div className="input-group  ">
              <input
                type="text"
                className="form-control  "
                placeholder="Search Products..."
                aria-label="Search Products..."
                aria-describedby="button-addon"
                style={{ width: "500px" }}
              />
              <div className="input-group-append">
                <button
                  className="btn-header px-3"
                  type="button"
                  id="button-addon"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="price-wrapper ">
            <div className="input-group  ">
              <input
                disabled
                type="text"
                value={`0 Items - $0.00`}
                className="form-control text-center bg-light"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />

              <div className="input-group-append">
                <button
                  className="btn-header px-3"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-shopping-basket"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="nav-bar  m-auto d-flex flex-row justify-content-between align-items-center py-3"
        style={{ width: "90%" }}
      >
        <div className="Logo">
          <img style={{ height: "100px" }} src={Logo} alt="" />
        </div>
        <div className="Logo d-flex flex-row ">
          <div className="d-flex flex-row pr-5 border align-items-center ">
            <img
              className="mr-2 pr-2 border"
              // style={{ height: "70px" }}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "70px",
              }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLM9ocMWlwnfx_ZNNxNJY0NzIRzBqml4Kshm0S3yguu7FmP38M"
              alt=""
            />
            <div>
              <h6>GRAB OFFER!!!</h6>
              <p>headphones available in 30% off</p>
            </div>
          </div>
          <div className="d-flex flex-row pr-5 border align-items-center ml-5 ">
            <img
              className="mr-2 pr-2 border"
              // style={{ height: "70px" }}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "70px",
              }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLM9ocMWlwnfx_ZNNxNJY0NzIRzBqml4Kshm0S3yguu7FmP38M"
              alt=""
            />
            <div>
              <h6>GRAB OFFER!!!</h6>
              <p>headphones available in 30% off</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
