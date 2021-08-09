export const renderTien = (value) => {
  return <>{` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "vnđ"}</>;
};