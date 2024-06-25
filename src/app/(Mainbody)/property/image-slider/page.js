/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The data is being returned as an array of objects.
 */
"use client";
import React, { Fragment, useEffect, useState } from "react";
import SliderSection from "@/components/property/tabPanelPages/Slider";
import { getData } from "@/utils/getData";
import NavbarFive from "@/layout/headers/NavbarFive";
import FooterThree from "@/layout/footers/FooterThree";
import BodyContent from "@/components/property/tabPanelPages";
import { useSearchParams } from "next/navigation";

const View360 = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [value, setValue] = useState({});

  useEffect(() => {
    getData(`/api/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((item) => item.id === id)
            .pop()
        );
      })
      .catch((error) => console.log("Error", error));
  }, [id]);

  return (
    <Fragment>
      <NavbarFive />
      <BodyContent singleData={value} id={id}>
        <SliderSection singleData={value?.img} id={id} />
      </BodyContent>
      <FooterThree />
    </Fragment>
  );
};

export default View360;
