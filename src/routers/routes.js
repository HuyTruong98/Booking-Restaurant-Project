import React from "react";
import Detail from "../components/management_restaurant/quanlynhahang/detail";
import DetailUser from "../components/management_restaurant/quanlynguoidung/detail";
import PageQuanLyNhaHang from "../pages/quanlynhahang/pageQuanLyNhaHang";
import PageQuanLySanh from "../pages/quanlysanh/pageQuanLySanh";
import PageQuanLyNhanVien from "../pages/quanlynhanvien/pageQuanLyNhanVien";
import PageQuanLyChucVuNhanVien from "../pages/quanlychucvunhanvien/pageQuanLyChucVuNhanVien";
import PageQuanLyHoaDon from "../pages/quanlyhoadon/pageQuanLyHoaDon";
import PageBaoCaoTong from "../pages/pageBaoCaoTongQuat/pageBaoCaoTong";
import DetailSanh from "../components/management_restaurant/quanLySanh/detail";
import PageQuanLyNguoiDung from "../pages/pageNguoiDung/pageQuanLyNguoiDung";

const routes = [
  {
    path: "/quanlynhahang",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyNhaHang location={location} match={match} />
    ),
  },
  {
    path: "/quanlynhahang/:id",
    exact: true,
    main: ({ history, match }) => <Detail history={history} match={match} />,
  },
  {
    path: "/quanlysanh",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLySanh location={location} match={match} />
    )
  },
  {
    path: "/quanlysanh/:id",
    exact: true,
    main: ({ history, match }) => <DetailSanh history={history} match={match} />,
  },
  {
    path: "/quanlynhanvien/danhsach",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyNhanVien location={location} match={match} />
    )
  },
  {
    path: "/quanlychucvunhanvien/danhsach",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyChucVuNhanVien location={location} match={match} />
    ),
  },
  {
    path: "/quanlyhoadon/hoadon",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyHoaDon location={location} match={match} />
    ),
  },
  {
    path: "/baocaotongquat",
    exact: true,
    main: ({ match, location }) => (
      <PageBaoCaoTong location={location} match={match} />
    ),
  },
  {
    path: "/quanlynguoidung/danhsach",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyNguoiDung match={match} location={location} />
    ),
  },
  {
    path: "/quanlynguoidung/danhsach/:id",
    exact: true,
    main: ({ history, match }) => <DetailUser history={history} match={match} />,
  },
];

export default routes;
