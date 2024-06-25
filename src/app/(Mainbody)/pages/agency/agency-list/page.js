"use client";
import React, { Fragment, useEffect, useState } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/agency/agencyGrid";
import { getData } from "@/utils/getData";

const AgencyList = () => {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data.agencyList);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent clientData={clientData} style={"list-view"} listSize={2} size={3} />
      <FooterThree />
    </Fragment>
  );
};

export default AgencyList;
