import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import routes from "./../../routers/routes";
import * as act from "../../redux/actions/index";

function Nav({ history }) {
  function renderContentMenu(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }

  const dispatch = useDispatch();
  const dataAccount = useSelector((state) => state.account);
  function logOut() {
    localStorage.removeItem("userInfo");
    dispatch(act.checkToken({ checkToken: false }));
    dispatch(act.applicationId(0));
  }

  return (
    <div id="content-wrapper" className="d-flex flex-column fix-height">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}

          {/* <!-- Topbar Search --> */}
          <form className="navbar-search">
            {/* <Input.Search placeholder="Tìm kiếm..." /> */}
          </form>

          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Tìm kiếm ....."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {dataAccount.checkToken ? dataAccount.name : "Đăng nhập"}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={dataAccount.img}
                />
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                {/* <a className="dropdown-item " href="#">
									<i className="fa fa-user-o mr-2 text-gray-400" aria-hidden="true"></i>
                                        Thông tin
                </a> */}
                {/* <a className="dropdown-item" href="#">
									<i className="fa fa-user-plus mr-2 text-gray-400" aria-hidden="true"></i>
                                        Đổi mật khẩu
                </a> */}
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                  onClick={() => {
                    logOut();
                  }}
                >
                  <i
                    className="fa fa-sign-out  mr-2 text-gray-400"
                    aria-hidden="true"
                  ></i>
                  Đăng xuất
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <Switch>{renderContentMenu(routes)}</Switch>
      </div>
    </div>
  );
}

export default Nav;
