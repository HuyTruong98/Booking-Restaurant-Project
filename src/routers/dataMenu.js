export const menusList = [
  {
    name: "Hệ thống",
    type: "Menu",
    children: [
      {
        name: "Quản lý nhà hàng",
        to: "/quanlynhahang",
        exact: true,
        children: [
          {
            name: "Danh sách nhà hàng",
            to: "/quanlynhahang",
            exact: true,
          },
          {
            name: "Danh sách sảnh",
            to: "/quanlysanh",
            exact: true,
          }
        ],
      },
      {
        name: "Quản lý nhân viên",
        to: "/quanlynhanvien",
        exact: true,
        children: [
          {
            name: "Nhân viên",
            to: "/quanlynhanvien/danhsach",
            exact: true,
          },
          {
            name: "Chức vụ",
            to: "/quanlychucvunhanvien/danhsach",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý hóa đơn",
        to: "/quanlyhoadon",
        exact: true,
        children: [
          {
            name: "Hóa đơn",
            to: "/quanlyhoadon/hoadon",
            exact: true,
          },
        ],
      },
    ],
  },

  {
    name: "Quản lý thông tin",
    children: [
      {
        name: "Trang chủ",
        to: "/",
        exact: true,
      },
    ],
  },

  {
    name: "Báo cáo tổng quát",
    to: "/baocaotongquat",
    exact: true,
  },
  {
    name: "Danh sách người dùng",
    to: "/quanlynguoidung/danhsach",
    exact: true,
  },

];
