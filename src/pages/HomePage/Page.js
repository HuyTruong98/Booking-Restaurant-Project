import React from "react";
import { useSelector } from "react-redux";
import MenuLeft from "./MenuLeft";
import Nav from "./Nav";
import TrangChu from "./TrangChu";

function Page() {
  const dataAccount = useSelector((state) => state.account);
  console.log("🚀 ~ file: Page.js ~ line 9 ~ Page ~ dataAccount", dataAccount)
  return (
    <>
      {dataAccount.role !== "USER" ? (
        <div id="page-top">
          <div id="wrapper">
            <MenuLeft />
            {/* nội dung */}
            <Nav />
          </div>
        </div>
      ) : (
        <TrangChu />
      )}
    </>
  );
}

export default Page;
