/**
 * It fetches data from the API and then passes it to the BodyContent component
 * @returns The data is being returned from the API.
 */
"use client"
import React, { Fragment, useEffect, useState } from "react";
import BodyContent from "@/components/pages/agency/agencyGrid";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import { getData } from "@/utils/getData";

const AgentList = () => {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data.agentList);
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

export default AgentList;
