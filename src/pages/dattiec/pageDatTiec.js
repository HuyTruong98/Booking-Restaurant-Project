import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormDatTiec from "../../components/dattiec/formDatTiec";
import * as act from "../../redux/actions/index";
import { openNotification } from "../../components/notification/notification";

function PageDatTiec({ onVisible, setOnVisible }) {
  const [visible, setVisible] = useState(onVisible);
  const [checkDatTiec, setCheckDatTiec] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const dispatch = useDispatch();
  const itemHall = useSelector((state) => state.hallEditing);
  const itemRestaurant = useSelector((state) => state.itemEditing);
  const dataListService = useSelector((state) => state.service.listServices);
  const account_current = useSelector((state) => state.account);
  function handleCloseDrawer() {
    setVisible(false);
    setOnVisible(false);
  }
  useEffect(() => {
    dispatch(act.actFetchRestaurantRequest());
    setVisible(onVisible);
  }, [onVisible]);

  useEffect(() => {
    dispatch(act.actFetchTatCaSanhRequest());
    dispatch(act.actFetchDatBanRequest());
    dispatch(act.actFetchServiceRequest());
  }, []);

  function onSave(value) {
    let titleService = 0;
    let priceService = 0;
    if (checkDatTiec) {
      openNotification("Thông báo", "Không thể đặt tiệc");
    } else {
      if (
        dataListService && Array.isArray(dataListService) &&
        dataListService.filter((itemService) => itemService.id === value.serviceId).length > 0
      ) {
        titleService = dataListService.filter((itemService) => itemService.id === value.serviceId)[0].title;
        priceService = dataListService.filter((itemService) => itemService.id === value.serviceId)[0].price;
      }
      value = {
        ...value,
        dateBook: moment(value.dateBook).format("DD-MM-YYYY"),
        itemHall: itemHall,
        itemRestaurant: itemRestaurant,
        titleService: titleService,
        priceService: priceService,
        account_current: account_current,
      };
      dispatch(act.actCreateDatBanRequest(value));
      setCheckDatTiec(false);
      setSaveSuccess(!saveSuccess);
    }
  }

  return (
    <>
      <FormDatTiec
        visible={visible}
        handleCloseDrawer={handleCloseDrawer}
        onSave={onSave}
        setCheckDatTiec={setCheckDatTiec}
        saveSuccess={saveSuccess}
      />
    </>
  );
}

export default PageDatTiec;
