import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import routes from "../../routers/routes";
import * as act from "../../redux/actions/index";

function NavHomePage() {
  const dataAccount = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(act.actFetchDatBanRequest());
  }, [])




  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  function logOut() {
    localStorage.removeItem("userInfo");
    dispatch(act.checkToken({ checkToken: false }));
    dispatch(act.applicationId(0));
  }

  function onChangeToggle(value) {
    setToggle(!value);
  }
  const MenuLink = ({ label, to, activeOnlyWhenExact, onClick }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active all" : "";
          return (
            <li
              className={active}
              style={{ paddingRight: "70px", marginLeft: "20px" }}
            >
              <Link onClick={onClick} className="collapse-item" to={to}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}

        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow  navbar-expand-md fixed-top z-index">
          {/* <!-- Sidebar Toggle (Topbar) --> */}

          {/* <!-- Topbar Search --> */}
          <a className="navbar-brand" to="/">
            <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" height="70px" alt="photo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav">
              <MenuLink label="Trang Chủ" to="/" activeOnlyWhenExact={true} />
              <MenuLink
                label="Giới Thiệu"
                to="/about"
                activeOnlyWhenExact={false}
              />
              <MenuLink
                label="Thông Tin Nhà Hàng"
                to="/restaurantInfo"
                activeOnlyWhenExact={false}
              />
              {/* <MenuLink label="Tuyển dụng" to="/recruitment" activeOnlyWhenExact={false} /> */}
              <MenuLink
                label="Đánh giá"
                to="/reviews"
                activeOnlyWhenExact={false}
              />
              <MenuLink label="Đặt tiệc" to="/booking" activeOnlyWhenExact={false} />
              {/* <MenuLink label="Đặt tiệc" onClick={() => onChangeVisible()} /> */}
            </ul>
          </div>
          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => {
                  onChangeToggle(true);
                }}
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {dataAccount.checkToken ? dataAccount.name : <i style={{ fontSize: '30px' }} class="fa fa-user-circle-o" aria-hidden="true"></i>}
                </span>
                {dataAccount.checkToken ? (
                  <img
                    className="img-profile rounded-circle"
                    src={`${dataAccount.img}`}
                    style={{ width: "60px" }}
                  />
                ) : (
                  ""
                )}
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div
                className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${toggle && !dataAccount.checkToken ? "show" : ""
                  } ${dataAccount.checkToken ? "" : ""}`}
              >

                {dataAccount.checkToken ? (
                  <>

                    <button
                      style={{ background: 'white', color: 'black', fontSize: '20px' }}
                      aria-hidden="true"
                      title="Thông tin"
                    >
                      <MenuLink style={{ color: 'black' }} label="Thông tin cá nhân" to="/profile" activeOnlyWhenExact={false} />

                    </button>
                    <br />
                    {/* Chỗ này dùng lại Dropdown và Menu của AntD nhé */}
                    <button
                      style={{ background: 'white', color: 'rgb(63, 56, 56)', paddingLeft: '20px', fontSize: '20px' }}
                      aria-hidden="true"
                      onClick={() => {
                        logOut();
                      }}
                    >Đăng xuất</button>

                  </>
                ) : (
                  <MenuLink label="Đăng nhập" to="/login" activeOnlyWhenExact={false} />
                )}
              </div>
            </li>
          </ul>
        </nav>
        {/* <Switch>{renderContentMenu(routes)}</Switch> */}

      </div>
    </div>
  );
}

export default NavHomePage;